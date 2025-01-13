// src/index.ts
import crypto from 'crypto';
import { writeFile } from 'fs/promises';

import express, { Request, Response } from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 3000;
const logFilePath = './files/log.txt'

// Log the string with timestamp every 5 seconds
setInterval(async () => {
  const randomString = generateRandomString();
  const timestamp = new Date().toISOString();
  const logOutString = `${timestamp}: ${randomString}`;
  console.log(logOutString);
  await writeFile(logFilePath, logOutString, 'utf-8');
}, 5000);


function generateRandomString() {
  return crypto.randomBytes(16).toString('hex');
}

// For capture CTRL+C if run with  "docker run -it"
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

function gracefulShutdown() {
  console.log('Shutting down');
  process.exit(0);
}

