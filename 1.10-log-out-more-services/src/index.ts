// src/index.ts
import crypto from 'crypto';
import { readFile } from 'fs/promises';

import express, { Request, Response } from 'express';
import path from 'path';

const logFilePath = './files/log.txt'
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  const logOutString = await readFile(logFilePath, 'utf8');
  res.send(logOutString);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// For capture CTRL+C if run with  "docker run -it"
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

function gracefulShutdown() {
  console.log('Shutting down');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
}
