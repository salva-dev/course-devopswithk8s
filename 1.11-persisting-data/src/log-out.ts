// src/index.ts
import crypto from "crypto";
import { readFile } from "fs/promises";

import express, { Request, Response } from "express";
import path, { resolve } from "path";

const sharedFile = "./files/shared-file.txt";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const logOutString = await getTimeStampHashPingPongNumberString();
  res.send(logOutString);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Log the string with timestamp every 5 seconds
setInterval(async () => {
  const logOutString = await getTimeStampHashPingPongNumberString();
  console.log(logOutString);
}, 5000);

async function getTimeStampHashPingPongNumberString() {
  const timespampAndHash = generateTimeStampAndHash();
  const pingpongNumber = await readFile(sharedFile, "utf8");

  const result = `${timespampAndHash}\nPing / Pongs: ${pingpongNumber}`;

  return result;
}

function generateTimeStampAndHash() {
  const randomString = crypto.randomBytes(16).toString("hex");
  const timestamp = new Date().toISOString();
  return `${timestamp}: ${randomString}`;
}

// For capture CTRL+C if run with  "docker run -it"
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

function gracefulShutdown() {
  console.log("Shutting down");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
}
