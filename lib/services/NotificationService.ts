import EventEmitter from 'events';
import uuid from 'uuidv4';

export type NotificationType = 'error' | 'success';

interface Notification {
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

  public show ({
    type = 'success',
    text,
    duration = 3000
  }: {
    type: NotificationType;
    text: string;
    duration?: number;
  }): void {
    if (!duration) {
      throw new Error('Duration is missing.');
    }

    const notification: Notification = {
      id: uuid(),
      type,
      text,
      duration
    };

    this.state.items.unshift(notification);

    this.emit('changed');

    setTimeout((): void => {
      const notificationIndex = this.state.items.indexOf(notification);

      this.state.items.splice(notificationIndex, 1);
      this.emit('changed');
    }, duration);
  }
}

export default NotificationService;
