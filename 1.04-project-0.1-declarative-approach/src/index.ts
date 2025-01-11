// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// For capture CTRL+C if run with  "docker run -it"
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

app.get('/', (req: Request, res: Response) => {
  res.send(`Server started in port ${port}`);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function gracefulShutdown() {
  console.log('Shutting down');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
}

