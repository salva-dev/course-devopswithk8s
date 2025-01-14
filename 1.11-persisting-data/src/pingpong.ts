// src/index.ts
import crypto from 'crypto';
import { readFile, writeFile } from 'fs/promises';

import express, { Request, Response } from 'express';
import path from 'path';
import { write } from 'fs';

const sharedFile = './files/shared-file.txt'

const app = express();
const port = process.env.PORT || 3000;

// For capture CTRL+C if run with  "docker run -it"
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

app.get('/pingpong', async (req, res) => {
  const counterIncremented = await incrementAndGetCounter(); 
  const response = `pong ${counterIncremented}`;
  console.log(`Send as response: ${response}`);

  res.send(response);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function incrementAndGetCounter(): Promise<number> {
  let counter = 0;

  try {
    const fileContent = await readFile(sharedFile, 'utf-8');

    if (!isNaN(Number(fileContent))) {
      counter = Number.parseInt(fileContent);
      console.log(`Read counter ${counter} from file ${sharedFile}`);
    }

    counter++;

  } catch (error: any) {
    // If the file doesn't exist or is empty, start from 0
    console.log('File doesn\'t exist. Create with counter 0' )
  }

  await writeFile(sharedFile, counter.toString(), 'utf-8');
  console.log(`Counter incremented ${counter} and saved to file ${sharedFile}`);

  return counter;
}

function gracefulShutdown() {
  console.log('Shutting down');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
}

