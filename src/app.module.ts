import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ChatGateway } from './chat/chat.gateway';
import { ChatService } from './chat/chat.service';
import { ChatModule } from './chat/chat.module';
import { ChatController } from './chat/chat.controller';

@Module({
  imports: [
    UserModule,
    ChatModule
  ],
  controllers: [AppController, ChatController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule { }
