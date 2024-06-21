import { ClientProxyFactory, Transport, ClientOptions } from '@nestjs/microservices';

export const rabbitMQConfig: ClientOptions = {
    transport: Transport.RMQ,
    options: {
        urls: [`amqp://${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`],
        queue: 'messages_queue',
        queueOptions: {
            durable: false
        },
    },
};

export const rabbitMQClient = ClientProxyFactory.create(rabbitMQConfig);
