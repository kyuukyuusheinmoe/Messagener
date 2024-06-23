import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const rabbitMQUrl = configService.get<string>('RABBITMQ_URL');

  const rabbitMQConfig: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [rabbitMQUrl],
      queue: 'messages_queue',
      queueOptions: {
        durable: false,
      },
    },
  };

  app.connectMicroservice(rabbitMQConfig);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
