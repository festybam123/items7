import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import Stripe from 'stripe';

/**
 * =========================
 * ENV SETUP
 * =========================
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

/**
 * =========================
 * VALIDATE ENV
 * =========================
 */
if (!process.env.MONGODB_URI) {
  throw new Error('❌ MONGODB_URI is missing');
}

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('❌ STRIPE_SECRET_KEY is missing');
}

/**
 * =========================
 * APP SETUP
 * =========================
 */
const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors({
  origin: [
    process.env.CORS_ORIGIN,
    'https://items7-98zr.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

/**
 * =========================
 * HEALTH
 * =========================
 */
app.get('/', (_, res) => res.send('API RUNNING 🚀'));

app.get('/health', (_, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

/**
 * =========================
 * STRIPE
 * =========================
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Payment failed' });
  }
});

/**
 * =========================
 * MONGODB
 * =========================
 */
const client = new MongoClient(process.env.MONGODB_URI, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
});

let ordersCollection = null;

async function connectMongoDB() {
  try {
    await client.connect();
    const db = client.db('ecommerec');
    ordersCollection = db.collection('orders');
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    console.log('⏳ Retrying in 5 seconds...');
    setTimeout(connectMongoDB, 5000);
  }
}

connectMongoDB();

/**
 * =========================
 * ORDERS ROUTES
 * =========================
 */
app.post('/api/orders', async (req, res) => {
  try {
    if (!ordersCollection) {
      return res.status(503).json({ error: 'Database not ready' });
    }

    const { items, formData } = req.body;

    if (!Array.isArray(items) || !formData) {
      return res.status(400).json({ error: 'Invalid order data' });
    }

    const order = {
      items,
      formData,
      orderId: Date.now(),
      createdAt: new Date(),
    };

    const result = await ordersCollection.insertOne(order);

    res.status(201).json({
      message: 'Order created',
      orderId: order.orderId,
      _id: result.insertedId,
    });
  } catch (err) {
    console.error('Order error:', err.message);
    res.status(500).json({ error: 'Order failed' });
  }
});

app.get('/api/orders', async (_, res) => {
  try {
    if (!ordersCollection) {
      return res.status(503).json({ error: 'Database not ready' });
    }

    const orders = await ordersCollection.find().toArray();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  try {
    if (!ordersCollection) {
      return res.status(503).json({ error: 'Database not ready' });
    }

    const orderId = Number(req.params.id);

    const order = await ordersCollection.findOne({ orderId });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

/**
 * =========================
 * START SERVER (SAFE)
 * =========================
 */
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} already in use`);
    process.exit(1);
  }
});

/**
 * =========================
 * GRACEFUL SHUTDOWN
 * =========================
 */
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down...');
  await client.close();
  process.exit(0);
});