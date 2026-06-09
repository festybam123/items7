import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import Stripe from 'stripe';
import dns from 'dns/promises';
import net from 'net';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
  origin: [
    process.env.CORS_ORIGIN || 'http://localhost:5173',
    'https://items7-98zr.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Stripe
const stripe =
  process.env.STRIPE_SECRET_KEY &&
  process.env.STRIPE_SECRET_KEY !== 'sk_test_your_stripe_secret_key_here'
    ? new Stripe(process.env.STRIPE_SECRET_KEY)
    : null;

// Payment route
app.post('/api/create-payment-intent', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// MongoDB fallback
const inMemoryOrders = [];
let mongoClient = null;

// Mongo connection
const getOrdersCollection = async () => {
  try {
    if (!mongoClient) {
      const mongoUri =
        process.env.MONGODB_URI ||
        'mongodb://localhost:27017/restaurant_db';

      mongoClient = new MongoClient(mongoUri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      await mongoClient.connect();
      console.log('Connected to MongoDB');
    }

    return mongoClient.db('restaurant_db').collection('orders');
  } catch (err) {
    console.log('MongoDB failed, using memory storage');
    return null;
  }
};

// Create order
app.post('/api/orders', async (req, res) => {
  try {
    const order = req.body;

    if (!order?.items || !order?.formData) {
      return res.status(400).json({ error: 'Invalid order' });
    }

    const orderId = Date.now();

    const fullOrder = {
      ...order,
      orderId,
      createdAt: new Date(),
    };

    const collection = await getOrdersCollection();

    if (collection) {
      await collection.insertOne(fullOrder);
    } else {
      inMemoryOrders.push(fullOrder);
    }

    res.status(201).json({ message: 'Order saved', orderId });
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
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});