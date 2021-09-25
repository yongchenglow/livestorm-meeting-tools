import { PubSub } from '@livestorm/plugin';
import { GroupNotification } from './GroupNotification';
import { RandomNotification } from './RandomNotification';
import { TimerNotification } from './TimerNotification';

export async function SubscriptionListener() {
  PubSub.subscribe('meeting-tools', ({ action, value }) => {
    if (action == 'random') {
      RandomNotification(value);
    } else if (action == 'group') {
      GroupNotification(value);
    } else if (action == 'timer') {
      TimerNotification(value);
    }
  });
}
