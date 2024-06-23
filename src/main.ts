import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { rabbitMQConfig } from 'rabbitmq.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice(rabbitMQConfig);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
