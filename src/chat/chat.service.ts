// chat.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Injectable()
export class ChatService {
    private readonly logger = new Logger(ChatService.name);

    constructor() { }

    @EventPattern('message') // Ensure this matches the event name in RabbitMQ
    async handleMessage(@Payload() message: any) {
        try {
            console.log('Message received from RabbitMQ:', message);
            this.logger.log('Message received from RabbitMQ:', message)
        } catch (error) {
            console.error('Error processing message:', error);
            this.logger.error('Message received from RabbitMQ:', error)
        }
    }
}
