import { MongoClient, ServerApiVersion } from 'mongodb';

const inMemoryOrders = [];
let mongoClient = null;

const getOrdersCollection = async () => {
  try {
    if (!mongoClient) {
      const mongoUri = process.env.MONGODB_URI;
      
      if (!mongoUri || mongoUri.includes('cluster.mongodb.net')) {
        console.log('MongoDB URI not configured, using in-memory storage');
        return null;
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

    await ordersCollection.createIndex({ orderId: 1 }, { unique: true }).catch(() => {});

    return ordersCollection;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    return null;
  }
};

const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    if (typeof req.body === 'object' && req.body !== null) {
      resolve(req.body);
      return;
    }
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
};

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const ordersCollection = await getOrdersCollection();
      if (ordersCollection) {
        const orders = await ordersCollection.find({}).sort({ createdAt: -1 }).toArray();
        res.status(200).json(orders);
      } else {
        res.status(200).json(inMemoryOrders);
      }
    } else if (req.method === 'POST') {
      const body = await parseBody(req);
      
      if (!body || !body.items || !body.formData) {
        return res.status(400).json({ error: 'Invalid order data' });
      }

      const orderId = Date.now() + Math.floor(Math.random() * 1000);
      const orderWithId = { ...body, orderId, createdAt: new Date() };

      const ordersCollection = await getOrdersCollection();
      if (ordersCollection) {
        await ordersCollection.insertOne(orderWithId);
      } else {
        inMemoryOrders.push(orderWithId);
      }

      res.status(201).json({ message: 'Order received', orderId });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}