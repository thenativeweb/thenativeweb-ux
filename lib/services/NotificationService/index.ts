import { EventEmitter } from 'events';
import { v4 } from 'uuid';

export type NotificationType = 'error' | 'success';

export interface Notification {
  id: string;
  type: NotificationType;
  text: string;
  duration: number;
}

interface State {
  items: Notification[];
}

class NotificationService extends EventEmitter {
  public state: State;

  public constructor () {
    super();

    this.state = {
      items: []
    };
  }

  public addNotification ({ type, text, duration }: { type: NotificationType; text: string; duration: number }): Notification {
    const notification: Notification = {
      id: v4(),
      type,
      text,
      duration
    };

    this.state.items.unshift(notification);

    this.emit('changed');

    return notification;
  }

  public removeNotification (notification: Notification): void {
    const notificationIndex = this.state.items.indexOf(notification);

    this.state.items.splice(notificationIndex, 1);
    this.emit('changed');
  }

  public show ({
    type = 'success',
    text,
    duration = 3_000
  }: {
    type: NotificationType;
    text: string;
    duration?: number;
  }): void {
    if (!duration) {
      throw new Error('Duration is missing.');
    }

    const notification = this.addNotification({ type, text, duration });

    setTimeout((): void => {
      this.removeNotification(notification);
    }, duration);
  }
}

export { NotificationService };
