import { PubSub } from '@livestorm/plugin';

export async function PublishMessage(action, value) {
  PubSub.publish('meeting-tools', {
    data: { action, value },
  });
}
