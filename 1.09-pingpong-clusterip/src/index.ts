// src/index.ts
import crypto from 'crypto';

import express, { Request, Response } from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 3000;

// For capture CTRL+C if run with  "docker run -it"
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// In-memory store for request count
const requestStore = {
  count: 0,
};

function incrementRequestCount() {
  requestStore.count++;
  console.log(`Current request count: ${requestStore.count}`);
}

app.get('/', (req, res) => {
  const response = `pong ${requestStore.count}`;
  incrementRequestCount();
  res.send(response);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Log the string with timestamp every 5 seconds
setInterval(() => {
  const randomString = generateRandomString();
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}, 5000);


function generateRandomString() {
  return crypto.randomBytes(16).toString('hex');
}

function gracefulShutdown() {
  console.log('Shutting down');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
}

