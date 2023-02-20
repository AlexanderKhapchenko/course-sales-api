import { ITelegramOptions } from 'src/telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const getTelegramConfig = (
  configService: ConfigService,
): ITelegramOptions => {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw Error('TELEGRAM_TOKEN not defined');
  }
  return {
    chatId: configService.get('TELEGRAM_CHAT_ID') ?? '',
    token,
  };
};
