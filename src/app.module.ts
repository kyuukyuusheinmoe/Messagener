import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule { }
