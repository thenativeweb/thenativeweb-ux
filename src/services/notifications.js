import EventEmitter from 'events';
import uuid from 'uuidv4';

class NotificationsService extends EventEmitter {
  constructor () {
    super();

    this.state = {
      items: []
    };
  }

  show ({ type, text, duration } = {}, options = { duration: 3000 }) {
    if (!type) {
      throw new Error('Type is missing.');
    }
    if (!text) {
      throw new Error('Text is missing.');
    }
    if (!duration) {
      throw new Error('Duration is missing.');
    }

    const notification = {
      id: uuid(),
      type,
      text,
      duration
    };

    this.state.items.unshift(notification);

    this.emit('changed');

    setTimeout(() => {
      const notificationIndex = this.state.items.indexOf(notification);

      this.state.items.splice(notificationIndex, 1);
      this.emit('changed');
    }, options.duration);
  }
}

export default new NotificationsService();
