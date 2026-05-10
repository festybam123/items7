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
  if (req.method === 'GET') {
    try {
      const orderId = parseInt(req.query.id);
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
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}