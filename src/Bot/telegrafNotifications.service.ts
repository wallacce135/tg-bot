import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { Context } from './context.interface';



@Update()
export class TelegraNotificationsService {

    @Start()
    async OnBotStart(@Ctx() context: Context): Promise<void> {
        await context.reply('Привет!');
    }

    @On('message')
    async onAnyMessage(@Ctx() context: Context): Promise<void> {
        await context.reply('Любое сообщение!');
    }
}