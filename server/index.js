import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection - for serverless functions, connect on each request
const inMemoryOrders = [];
let mongoClient = null;

const getOrdersCollection = async () => {
  try {
    if (!mongoClient) {
      const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant_db';
      mongoClient = new MongoClient(mongoUri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true
        }
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
    res.status(500).json({ error: 'Failed to save order' });
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