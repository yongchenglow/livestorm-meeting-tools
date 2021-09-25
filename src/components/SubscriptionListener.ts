import { PubSub } from '@livestorm/plugin';
import { GroupNotification } from './GroupNotification';
import { RandomNotification } from './RandomNotification';
import { TimerNotification } from './TimerNotification';

export async function SubscriptionListener() {
  PubSub.subscribe(
    'meeting-tools',
    ({ action, value }: Record<string, any>): void => {
      if ((action as string) == 'random') {
        RandomNotification(value as string);
      } else if ((action as string) == 'group') {
        GroupNotification(value as string);
      } else if (action == 'timer') {
        TimerNotification(value as string);
      }
    },
  );
}
