import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  const appPort = parseInt(process.env.APP_PORT_EXT, 10);
  console.log(`Shop Server Running on Port ${appPort}`);
  await app.listen(appPort);
}
bootstrap();
