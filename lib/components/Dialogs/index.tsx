import { styles } from './styles';
import { useForceUpdate } from '../useForceUpdate';
import { Button, dialogs, Headline, Modal } from '../..';
import { classNames, createUseStyles } from '../../styles';
import { excecutionEnvironment, getPortalRootNode } from '../../services';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';

const useStyles = createUseStyles(styles);

interface DialogsProps {
  className?: string;
  portalRootNode?: HTMLElement;
}

const Dialogs: FunctionComponent<DialogsProps> = ({
  className,
  portalRootNode
}): ReactElement => {
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  const handleServiceChanged = useCallback((): void => {
    forceUpdate();
  }, []);

  const handleCancel = useCallback((): void => {
    dialogs.state.confirm.onCancel();
  }, []);

  const handleConfirm = useCallback((): void => {
    dialogs.state.confirm.onConfirm();
  }, []);

  const handleKeyDown = useCallback((key: string): void => {
    switch (key) {
      case 'Escape':
        dialogs.state.confirm.onCancel();
        break;
      case 'Enter':
        dialogs.state.confirm.onConfirm();
        break;
      default:
        break;
    }
  }, []);

  useEffect((): () => void => {
    dialogs.on('changed', handleServiceChanged);

    return (): void => {
      dialogs.removeListener('changed', handleServiceChanged);
    };
  }, []);

  return (
    <Modal
      attach='center'
      portalRootNode={ excecutionEnvironment.canUseDom ? portalRootNode || getPortalRootNode() : undefined }
      showHeader={ false }
      isVisible={ dialogs.state.confirm.isVisible }
      className={ classNames(classes.Dialogs, className) }
      onKeyDown={ handleKeyDown }
      onCancel={ handleCancel }
    >
      <Headline>
        { dialogs.state.confirm.title }
      </Headline>
      <div className={ classes.Actions }>
        <Button id='dialogs-confirm-action-cancel' adjust='auto' onClick={ handleCancel }>
          { dialogs.state.confirm.actions.cancel }
        </Button>
        <Button id='dialogs-confirm-action-confirm' adjust='flex' onClick={ handleConfirm } isPrimary={ true } autoFocus={ true }>
          { dialogs.state.confirm.actions.confirm }
        </Button>
      </div>
    </Modal>
  );
};

export { Dialogs };
