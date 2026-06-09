import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey && !stripeSecretKey.includes('your_stripe') ? new Stripe(stripeSecretKey) : null;

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
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end('Method Not Allowed');
    }

    const body = await parseBody(req);
    const { amount } = body;

    if (!stripe) {
      return res.status(500).json({ error: 'Stripe not configured. Please set a valid STRIPE_SECRET_KEY.' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ error: error.message });
  }
}