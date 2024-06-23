import { Injectable } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Injectable()
export class ChatService {
    constructor() { }

    @EventPattern('message') // Ensure this matches the event name in RabbitMQ
    async handleMessage(@Payload() message: any) {
        console.log('Message received from RabbitMQ:', message);
    }
}
