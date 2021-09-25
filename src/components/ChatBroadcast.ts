import { Chat } from '@livestorm/plugin';

export async function ChatBroadcast(text, html) {
  Chat.broadcast({
    text: text,
    html: html,
  });
}
