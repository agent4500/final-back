import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const cors = require('cors');
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.use(cors());
  
  app.enableCors({
    origin: ['http://localhost:3001','http://localhost:3000'], // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
    exposedHeaders: ['Authorization'], // Headers exposed to client
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  });

  await app.listen(3000);
}
bootstrap();
