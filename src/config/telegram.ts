import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN as string);
const chat_id = process.env.TELEGRAM_CHAT_ID as string;

export const send = (text: string) => {
    bot.sendMessage(chat_id, text);
};
