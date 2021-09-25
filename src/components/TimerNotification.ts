import { NotificationCenter } from '@livestorm/plugin';

export async function TimerNotification(value) {
  var newValue = value;
  NotificationCenter.showIframe(require('../templates/timer.html').default, {
    value: newValue,
  });
  var interval = setInterval(function () {
    if (newValue - 5 > 0) {
      newValue -= 5;
    } else {
      
      clearInterval(interval);
    }
    NotificationCenter.showIframe(require('../templates/timer.html').default, {
      value: newValue,
    });
  }, 5000);
}
