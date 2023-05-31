import { TelegrafModule } from "nestjs-telegraf";
import { Module } from '@nestjs/common';
import { NOTIFICATIONS_BOT_NAME } from "./BotConstants";
import { ConfigService } from "@nestjs/config";
import { sessionMiddleware } from "./middleware/session.middleware";
import { HttpModule } from "@nestjs/axios";
import { TelegraNotificationsService } from "./telegrafNotifications.service";


@Module({
    imports: [
        TelegrafModule.forRootAsync({
            botName: NOTIFICATIONS_BOT_NAME,
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                token: config.get('NOTIFICATIONS_BOT_TOKEN'),
                middlewares: [sessionMiddleware]
            })
        }),
        HttpModule
    ],
    providers: [
        TelegraNotificationsService
    ],
    controllers: []
})


export class TelegraNotificationsBotModule  { }