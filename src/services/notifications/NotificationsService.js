import EventEmitter from 'events';
import uuid from 'uuidv4';

class NotificationsService extends EventEmitter {
  constructor () {
    super();

    this.items = [];
  }

  show (notification, options = { duration: 3000 }) {
    if (!notification) {
      throw new Error('Notfication is missing.');
    }
    if (!notification.type) {
      throw new Error('Type is missing.');
    }
    if (!notification.text) {
      throw new Error('Text is missing.');
    }
    if (!options.duration) {
      throw new Error('Duration is missing.');
    }

    notification.id = uuid();

    this.items.unshift(notification);
    this.emit('changed');

    setTimeout(() => {
      const notificationIndex = this.items.indexOf(notification);

      this.items.splice(notificationIndex, 1);
      this.emit('changed');
    }, options.duration);
  }
}

export default NotificationsService;
