import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rabbitMQConfig } from 'rabbitmq.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(rabbitMQConfig);

  await app.listen(3000);
}
bootstrap();
