import 'dotenv/config';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== 'your_stripe_secret_key_here' ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  let body;
  try {
    // For Vercel serverless, handle both string body and parsed body
    if (typeof req.body === 'string') {
      body = JSON.parse(req.body);
    } else if (Buffer.isBuffer(req.body)) {
      body = JSON.parse(req.body.toString());
    } else if (typeof req.body === 'object') {
      body = req.body;
    } else {
      return res.status(400).json({ error: 'Invalid request body format' });
    }
  } catch (e) {
    console.error('Failed to parse body:', e.message);
    return res.status(400).json({ error: 'Invalid JSON', details: e.message });
  }

  if (!stripe) {
    return res.status(500).json({ error: 'Stripe not configured. Please set a valid STRIPE_SECRET_KEY.' });
  }

  try {
    const { amount } = body; // amount in cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}