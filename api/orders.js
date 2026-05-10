import { MongoClient, ServerApiVersion } from 'mongodb';

const inMemoryOrders = [];

let mongoClient;
let ordersCollection;

const connectToMongoDB = async () => {
  try {
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

    const db = mongoClient.db('restaurant_db');
    ordersCollection = db.collection('orders');

    // Create index on orderId for faster lookups
    await ordersCollection.createIndex({ orderId: 1 }, { unique: true });
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Falling back to in-memory storage (not persistent)');
    ordersCollection = null;
  }
};

connectToMongoDB().catch(console.error);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const order = req.body;
      if (!order || !order.items || !order.formData) {
        return res.status(400).json({ error: 'Invalid order data' });
      }

      // Generate unique orderId
      const orderId = Date.now() + Math.floor(Math.random() * 1000);
      const orderWithId = { ...order, orderId, createdAt: new Date() };

      if (ordersCollection) {
        await ordersCollection.insertOne(orderWithId);
      } else {
        // Fallback to in-memory storage
        inMemoryOrders.push(orderWithId);
        console.log('Order saved to in-memory storage');
      }

      res.status(201).json({ message: 'Order received', orderId });
    } catch (err) {
      console.error('Error saving order:', err);
      res.status(500).json({ error: 'Failed to save order' });
    }
  } else if (req.method === 'GET') {
    try {
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
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}