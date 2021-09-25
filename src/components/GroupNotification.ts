import { NotificationCenter } from '@livestorm/plugin';

export async function GroupNotification(value) {
  NotificationCenter.showIframe(require('../templates/group.html').default, {
    value: value,
  });
}
