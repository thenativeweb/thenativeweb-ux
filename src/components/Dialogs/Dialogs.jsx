import Button from '../Button';
import Modal from '../Modal';
import React from 'react';
import services from '../../services';
import styles from './styles.css';

class Dialogs extends React.PureComponent {
  constructor () {
    super();

    this.state = {
      isVisible: false
    };

    this.handleServiceChanged = this.handleServiceChanged.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount () {
    services.dialogs.on('changed', this.handleServiceChanged);
  }

  componentWillUnount () {
    services.dialogs.removeListener('changed', this.handleServiceChanged);
  }

  handleServiceChanged () {
    this.forceUpdate();
  }

  /* eslint-disable class-methods-use-this */
  handleCancel () {
    services.dialogs.state.confirm.onCancel();
  }

  handleConfirm () {
    services.dialogs.state.confirm.onConfirm();
  }

  render () {
    return (
      <Modal
        attach='center'
        isVisible={ services.dialogs.state.confirm.isVisible }
        className={ styles.Dialogs }
      >
        <Modal.Title>
          { services.dialogs.state.confirm.title }
        </Modal.Title>
        <div className={ styles.Actions }>
          <Button adjust='flex' onClick={ this.handleCancel }>
            { services.dialogs.state.confirm.actions.cancel }
          </Button>
          <Button adjust='flex' onClick={ this.handleConfirm }isPrimary={ true }>
            { services.dialogs.state.confirm.actions.confirm }
          </Button>
        </div>
      </Modal>
    );
  }
  /* eslint-enable class-methods-use-this */
}

export default Dialogs;
