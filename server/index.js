import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import Stripe from 'stripe';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * =========================
 * MIDDLEWARE
 * =========================
 */
app.use(cors({
  origin: [
    process.env.CORS_ORIGIN,
    'https://items7-98zr.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

/**
 * =========================
 * HEALTH CHECK
 * =========================
 */
app.get('/', (req, res) => {
  res.send('API RUNNING 🚀');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    time: new Date().toISOString()
  });
});

/**
 * =========================
 * STRIPE SETUP
 * =========================
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-payment-intent', async (req, res) => {
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
 * MONGODB SETUP
 * =========================
 */
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let ordersCollection;

/**
 * CONNECT DB ON START
 */
async function connectDB() {
  try {
    await client.connect();
    const db = client.db('restaurant_db');
    ordersCollection = db.collection('orders');
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed', err);
  }
}

connectDB();

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

    const newOrder = {
      ...order,
      orderId: Date.now(),
      createdAt: new Date(),
    };

    await ordersCollection.insertOne(newOrder);

    res.status(201).json({
      message: 'Order created',
      orderId: newOrder.orderId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await ordersCollection.find().toArray();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single order
app.get('/api/orders/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const order = await ordersCollection.findOne({ orderId: id });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * =========================
 * START SERVER
 * =========================
 */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});