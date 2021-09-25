import { PubSub } from '@livestorm/plugin';

export async function PublishMessage(action: string, value: string) {
  PubSub.publish('meeting-tools', {
    data: { action, value },
  });
}
