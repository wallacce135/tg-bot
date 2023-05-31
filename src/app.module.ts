import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegraNotificationsBotModule } from './Bot/telegrafNotifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TelegraNotificationsBotModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService
  ],
})
export class AppModule {}
