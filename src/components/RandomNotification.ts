import { NotificationCenter } from '@livestorm/plugin';

export async function RandomNotification(value: string) {
  NotificationCenter.showIframe(require('../templates/random.html').default, {
    value: value,
  });
}
