import { NotificationCenter } from '@livestorm/plugin';

export async function RandomNotification(value) {
  NotificationCenter.showIframe(require('../templates/random.html').default, {
    value: value,
  });
}
