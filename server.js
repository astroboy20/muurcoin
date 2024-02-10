const express = require('express');
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const API_URL = "http://162.254.35.120/api/auth/login"; // Access environment variable

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post('/proxy', async (req, res) => {
    try {
      const response = await axios.post(API_URL, req.body);
      res.json(response.data);
    } catch (error) {
      console.error('Proxy Error:', error);
      res.status(error.response.status || 500).json({ error: 'Proxy Error' });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
});
