import { Chat } from '@livestorm/plugin';

export async function ChatBroadcast(text: string, html: string) {
  Chat.broadcast({
    text: text,
    html: html,
  });
}
