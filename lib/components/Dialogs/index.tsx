import Button from '../Button';
import { Classes } from 'jss';
import Headline from '../Headline';
import Modal from '../Modal';
import services from '../../services';
import styles from './styles';
import { withStyles } from '../../styles';
import React, { ReactElement } from 'react';

const KEY = {
  ENTER: 13,
  ESCAPE: 27
};

class Dialogs extends React.PureComponent<null, null> {
  private constructor () {
    super();

    this.handleServiceChanged = this.handleServiceChanged.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  public componentDidMount (): void {
    services.dialogs.on('changed', this.handleServiceChanged);
  }

  public componentWillUnmount (): void {
    services.dialogs.removeListener('changed', this.handleServiceChanged);
  }

  public handleServiceChanged (): void {
    this.forceUpdate();
  }

  /* eslint-disable class-methods-use-this */
  public handleCancel (): void {
    services.dialogs.state.confirm.onCancel();
  }

  public handleConfirm (): void {
    services.dialogs.state.confirm.onConfirm();
  }

  public handleKeyDown (key: number): void {
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

  public render (): ReactElement {
    const { classes } = this.props;

    return (
      <Modal
        attach='center'
        showHeader={ false }
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

export default withStyles(styles)(Dialogs);
