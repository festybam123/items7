import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import Stripe from 'stripe';
import dns from 'dns/promises';
import net from 'net';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const stripe = process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== 'sk_test_your_stripe_secret_key_here' ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

app.post('/api/create-payment-intent', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe not configured. Please set a valid STRIPE_SECRET_KEY.' });
  }
  try {
    const { amount } = req.body; // amount in cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// MongoDB connection - for serverless functions, connect on each request
const inMemoryOrders = [];
let mongoClient = null;

/**
 * Given a mongodb+srv:// URI, resolve the SRV record and return a standard
 * mongodb:// URI pointing at the resolved hosts. This prevents the raw
 * Driver-level SRV lookup from crashing the process before our catch block.
 */
async function resolveSrvUri(uri) {
  const m = uri.match(/^mongodb\+srv:\/\/([^/]+)\/(.+)$/);
  if (!m) return uri;
  const hostPart = m[1];
  const slashIdx = hostPart.indexOf('@');
  const atPart = hostPart.slice(slashIdx !== -1 ? slashIdx + 1 : 0);
  const [hostport] = atPart.split(',');
  const hostOnly = hostport.split(':')[0];
  const dbName = m[2].split('?')[0];

  let srv;
  try {
    srv = await dns.resolveSrv(`_mongodb._tcp.${hostOnly}`);
  } catch (_) {
    return uri;
  }
  if (!srv.length) return uri;
  // Build standard connection string from resolved SRV answers
  const hosts = srv
    .filter(r => r.type === 'SRV')
    .map(r => `${r.name}:${r.port}`)
    .join(',');
  const creds = slashIdx !== -1 ? hostPart.slice(0, slashIdx + 1) : '';
  return `mongodb://${creds}${hosts}/${dbName}?replicaSet=${encodeURIComponent(hostOnly)}&retryWrites=true&w=majority`;
}

/**
 * Quick TCP probe to confirm the resolved host is actually reachable
 * before we hand the URI to the driver.
 */
async function hostIsReachable(uri) {
  try {
    const u = new URL(uri);
    const target = u.hostname || u.host;
    if (!target || target === 'localhost') return true;
    const port = u.port ? parseInt(u.port) : 27017;
    return await new Promise((resolve) => {
      const s = net.createConnection({ host: target, port, timeout: 2000 }, () => resolve(true));
      s.on('timeout', () => { s.destroy(); resolve(false); });
      s.on('error', () => resolve(false));
      s.on('close', () => resolve(false));
    });
  } catch {
    return true;
  }
}

const getOrdersCollection = async () => {
  try {
    if (!mongoClient) {
      let mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant_db';

      if (mongoUri.startsWith('mongodb+srv://')) {
        mongoUri = await resolveSrvUri(mongoUri);
        if (!await hostIsReachable(mongoUri)) {
          console.warn('MongoDB host unreachable, using in-memory storage');
          return null;
        }
      }

      mongoClient = new MongoClient(mongoUri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true
        },
        serverSelectionTimeoutMS: 3000,
        connectTimeoutMS: 3000,
      });
      await mongoClient.connect();
      console.log('Connected to MongoDB');
    }

    const db = mongoClient.db('restaurant_db');
    const ordersCollection = db.collection('orders');

    // Create index on orderId for faster lookups (ignore errors if it already exists)
    await ordersCollection.createIndex({ orderId: 1 }, { unique: true }).catch(() => {});

    return ordersCollection;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Falling back to in-memory storage (not persistent)');
    return null;
  }
};

app.post('/api/orders', async (req, res) => {
  try {
    console.log('Received order request:', req.body);
    const order = req.body;
    if (!order || !order.items || !order.formData) {
      console.error('Invalid order data:', order);
      return res.status(400).json({ error: 'Invalid order data' });
    }

    // Generate unique orderId
    const orderId = Date.now() + Math.floor(Math.random() * 1000);
    const orderWithId = { ...order, orderId, createdAt: new Date() };
    console.log('Order to save:', orderWithId);

    const ordersCollection = await getOrdersCollection();
    if (ordersCollection) {
      await ordersCollection.insertOne(orderWithId);
      console.log('Order saved to MongoDB with ID:', orderId);
    } else {
      // Fallback to in-memory storage
      inMemoryOrders.push(orderWithId);
      console.log('Order saved to in-memory storage with ID:', orderId);
    }

    res.status(201).json({ message: 'Order received', orderId });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: (err && err.message) || 'Failed to save order' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const ordersCollection = await getOrdersCollection();
    if (ordersCollection) {
      const orders = await ordersCollection.find({}).sort({ createdAt: -1 }).toArray();
      res.json(orders);
    } else {
      res.json(inMemoryOrders);
    }
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const ordersCollection = await getOrdersCollection();
    if (ordersCollection) {
      const order = await ordersCollection.findOne({ orderId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } else {
      const order = inMemoryOrders.find(o => o.orderId === orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    }
  } catch (err) {
    console.error('Error fetching order:', err);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// For Vercel serverless functions, export the app
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });

  // Graceful shutdown
  process.on('SIGTERM', async () => {
    if (mongoClient) {
      await mongoClient.close();
      console.log('MongoDB connection closed');
    }
    process.exit(0);
  });
}