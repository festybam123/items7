import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

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

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body;
    try {
      body = JSON.parse(req.body);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON' });
    }

    try {
      console.log('Received order request:', body);
      const order = body;
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
  } else if (req.method === 'GET') {
    try {
      const ordersCollection = await getOrdersCollection();
      if (ordersCollection) {
        const orders = await ordersCollection.find({}).sort({ createdAt: -1 }).toArray();
        res.status(200).json(orders);
      } else {
        res.status(200).json(inMemoryOrders);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  } else {
    res.setHeader('Allow', 'POST, GET');
    res.status(405).end('Method Not Allowed');
  }
}