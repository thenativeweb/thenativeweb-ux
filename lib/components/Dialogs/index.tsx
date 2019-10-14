import { createUseStyles } from '../../styles';
import services from '../../services';
import styles from './styles';
import useForceUpdate from '../useForceUpdate';
import { Button, Headline, Modal } from '../..';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';

const useStyles = createUseStyles(styles);

const Dialogs: FunctionComponent = (): ReactElement => {
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  const handleServiceChanged = useCallback((): void => {
    forceUpdate();
  }, []);

  const handleCancel = useCallback((): void => {
    services.dialogs.state.confirm.onCancel();
  }, []);

  const handleConfirm = useCallback((): void => {
    services.dialogs.state.confirm.onConfirm();
  }, []);

  const handleKeyDown = useCallback((key: string): void => {
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
  }, []);

  useEffect((): () => void => {
    services.dialogs.on('changed', handleServiceChanged);

    return (): void => {
      services.dialogs.removeListener('changed', handleServiceChanged);
    };
  }, []);

  return (
    <Modal
      attach='center'
      showHeader={ false }
      isVisible={ services.dialogs.state.confirm.isVisible }
      className={ classes.Dialogs }
      onKeyDown={ handleKeyDown }
      onCancel={ handleCancel }
    >
      <Headline>
        { services.dialogs.state.confirm.title }
      </Headline>
      <div className={ classes.Actions }>
        <Button adjust='auto' onClick={ handleCancel }>
          { services.dialogs.state.confirm.actions.cancel }
        </Button>
        <Button adjust='flex' onClick={ handleConfirm } isPrimary={ true } autoFocus={ true }>
          { services.dialogs.state.confirm.actions.confirm }
        </Button>
      </div>
    </Modal>
  );
};

export default Dialogs;
