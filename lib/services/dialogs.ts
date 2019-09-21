import EventEmitter from 'events';

interface State {
  confirm: {
    isVisible: boolean;
    title: string;
    actions: {
      cancel: string;
      confirm: string;
    };
    onCancel: () => void;
    onConfirm: () => void;
  };
}

const defaultState = {
  confirm: {
    isVisible: false,
    title: '',
    actions: {
      cancel: '',
      confirm: ''
    },

    onCancel (): void {
      // Intentionally left blank.
    },

    onConfirm (): void {
      // Intentionally left blank.
    }
  }
};

class DialogsService extends EventEmitter {
  protected state: State;

  public constructor () {
    super();

    this.state = defaultState;
  }

  public hideConfirm (): void {
    this.state = defaultState;
    this.emit('changed');
  }

  public async confirm (
    title: string,
    actions: { cancel: string; confirm: string }
  ): Promise<string> {
    return new Promise((resolve): void => {
      this.state = {
        confirm: {
          isVisible: true,
          title,
          actions,
          onConfirm: (): void => {
            this.hideConfirm();
            resolve('confirm');
          },
          onCancel: (): void => {
            this.hideConfirm();
            resolve('cancel');
          }
        }
      };

      // Delay the rendering for keyboard events not to conflict.
      setTimeout((): void => {
        this.emit('changed');
      }, 0.1 * 1000);
    });
  }
}

export default new DialogsService();
