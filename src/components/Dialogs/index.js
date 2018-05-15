import Button from '../Button';
import Headline from '../Headline';
import injectSheet from 'react-jss';
import Modal from '../Modal';
import React from 'react';
import services from '../../services';

const KEY = {
  ENTER: 13,
  ESCAPE: 27
};

const styles = {
  Dialogs: {},

  Actions: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',

    '& *': {
      'flex-grow': 0,
      'max-width': '200px'
    }
  }
};

class Dialogs extends React.PureComponent {
  constructor () {
    super();

    this.state = {
      isVisible: false
    };

    this.handleServiceChanged = this.handleServiceChanged.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount () {
    services.dialogs.on('changed', this.handleServiceChanged);
  }

  componentWillUnmount () {
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

  handleKeyDown (key) {
    switch (key) {
      case KEY.ESCAPE:
        services.dialogs.state.confirm.onCancel();
        break;
      case KEY.ENTER:
        services.dialogs.state.confirm.onConfirm();
        break;
      default:
        break;
    }
  }
  /* eslint-enable class-methods-use-this */

  render () {
    const { classes } = this.props;

    return (
      <Modal
        attach='center'
        isVisible={ services.dialogs.state.confirm.isVisible }
        className={ classes.Dialogs }
        onKeyDown={ this.handleKeyDown }
      >
        <Headline>
          { services.dialogs.state.confirm.title }
        </Headline>
        <div className={ classes.Actions }>
          <Button adjust='auto' onClick={ this.handleCancel }>
            { services.dialogs.state.confirm.actions.cancel }
          </Button>
          <Button adjust='flex' onClick={ this.handleConfirm } isPrimary={ true } autoFocus={ true }>
            { services.dialogs.state.confirm.actions.confirm }
          </Button>
        </div>
      </Modal>
    );
  }
}

export default injectSheet(styles)(Dialogs);
