import { Classes } from 'jss';
import services from '../../services';
import styles from './styles';
import { withStyles } from '../../styles';
import { Button, Headline, Modal } from '../..';
import React, { ReactElement } from 'react';

interface DialogsProps {
  classes: Classes;
}

class Dialogs extends React.Component<DialogsProps> {
  public componentDidMount (): void {
    services.dialogs.on('changed', this.handleServiceChanged);
  }

  public componentWillUnmount (): void {
    services.dialogs.removeListener('changed', this.handleServiceChanged);
  }

  protected handleServiceChanged = (): void => {
    this.forceUpdate();
  };

  protected handleCancel = (): void => {
    services.dialogs.state.confirm.onCancel();
  };

  protected handleConfirm = (): void => {
    services.dialogs.state.confirm.onConfirm();
  };

  protected handleKeyDown = (key: string): void => {
    switch (key) {
      case 'Escape':
        services.dialogs.state.confirm.onCancel();
        break;
      case 'Enter':
        services.dialogs.state.confirm.onConfirm();
        break;
      default:
        break;
    }
  };

  public render (): ReactElement {
    const { classes } = this.props;

    return (
      <Modal
        attach='center'
        showHeader={ false }
        isVisible={ services.dialogs.state.confirm.isVisible }
        className={ classes.Dialogs }
        onKeyDown={ this.handleKeyDown }
        onCancel={ this.handleCancel }
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
