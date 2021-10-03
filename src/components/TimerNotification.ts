import { NotificationCenter } from '@livestorm/plugin';

export async function TimerNotification(value: string) {
  var newValue: number = parseInt(value);
  NotificationCenter.showIframe(require('../templates/timer.html').default, {
    value: newValue,
  });
  var interval = setInterval(function () {
    if (newValue - 9 > 0) {
      newValue -= 9;
    } else {
      clearInterval(interval);
    }
    NotificationCenter.showIframe(require('../templates/timer.html').default, {
      value: newValue,
    });
  }, 9000);
}
