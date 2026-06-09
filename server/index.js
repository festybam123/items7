import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import Stripe from 'stripe';

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * =========================
 * MIDDLEWARE
 * =========================
 */
app.use(cors({
  origin: [
    process.env.CORS_ORIGIN || 'http://localhost:5173',
    'https://items7-98zr.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

/**
 * =========================
 * HEALTH CHECK (IMPORTANT)
 * =========================
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running 🚀',
    time: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

/**
 * =========================
 * STRIPE
 * =========================
 */
const stripe =
  process.env.STRIPE_SECRET_KEY &&
  process.env.STRIPE_SECRET_KEY !== 'sk_test_your_stripe_secret_key_here'
    ? new Stripe(process.env.STRIPE_SECRET_KEY)
    : null;

app.post('/api/create-payment-intent', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({
      error: 'Stripe not configured properly'
    });
  }

  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * =========================
 * MONGODB
 * =========================
 */
let mongoClient = null;
const inMemoryOrders = [];

const getOrdersCollection = async () => {
  try {
    if (!mongoClient) {
      const uri =
        process.env.MONGODB_URL ||
        'mongodb://localhost:27017/restaurant_db';

      mongoClient = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      await mongoClient.connect();
      console.log('✅ Connected to MongoDB');
    }

    return mongoClient.db('restaurant_db').collection('orders');
  } catch (err) {
    console.log('⚠️ MongoDB failed, using memory storage');
    return null;
  }
};

/**
 * =========================
 * ORDERS ROUTES
 * =========================
 */

// Create order
app.post('/api/orders', async (req, res) => {
  try {
    const order = req.body;

    if (!order?.items || !order?.formData) {
      return res.status(400).json({ error: 'Invalid order data' });
    }

    const orderId = Date.now();

    const newOrder = {
      ...order,
      orderId,
      createdAt: new Date(),
    };

    const collection = await getOrdersCollection();

    if (collection) {
      await collection.insertOne(newOrder);
    } else {
      inMemoryOrders.push(newOrder);
    }

    res.status(201).json({
      message: 'Order saved successfully',
      orderId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const collection = await getOrdersCollection();

    if (collection) {
      const orders = await collection.find().toArray();
      return res.json(orders);
    }

    res.json(inMemoryOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single order
app.get('/api/orders/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const collection = await getOrdersCollection();

    if (collection) {
      const order = await collection.findOne({ orderId: id });
      return res.json(order);
    }

    const order = inMemoryOrders.find(o => o.orderId === id);
    res.json(order || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * =========================
 * START SERVER (RENDER FIX)
 * =========================
 */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});