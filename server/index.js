const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory order storage 
const orders = [];

app.post('/api/orders', (req, res) => {
  const order = req.body;
  if (!order || !order.items || !order.formData) {
    return res.status(400).json({ error: 'Invalid order data' });
  }
  // Assign a unique orderId
  const orderId = orders.length + 1;
  const orderWithId = { ...order, orderId };
  orders.push(orderWithId);
  res.status(201).json({ message: 'Order received', orderId });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find(o => o.orderId === orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
