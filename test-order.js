const http = require('http');

const orderData = {
  items: [{ id: 1, title: 'Test Pizza', price: 25.99 }],
  formData: {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    country: 'Nigeria',
    streetAddress: '123 Test St',
    townCity: 'Lagos',
    state: 'Lagos',
    phone: '08012345678',
    paymentMethod: 'cash'
  },
  discount: 0,
  total: 25.99
};

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/orders',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': JSON.stringify(orderData).length
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log('Response:', res.statusCode, data));
});

req.on('error', (err) => console.error('Error:', err.message));
req.write(JSON.stringify(orderData));
req.end();
