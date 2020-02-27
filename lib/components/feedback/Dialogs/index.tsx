import { DialogService } from '../../../services/DialogService';
import { styles } from './styles';
import { useForceUpdate } from '../../useForceUpdate';
import { Button, dialogs, Headline, Modal } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { excecutionEnvironment, getPortalRootNode } from '../../../services';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';

const useStyles = createUseStyles(styles);

interface DialogsProps {
  className?: string;
  dialogService?: DialogService;
  portalRootNode?: HTMLElement;
}

const Dialogs: FunctionComponent<DialogsProps> = ({
  className,
  dialogService = dialogs,
  portalRootNode
}): ReactElement => {
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  const handleServiceChanged = useCallback((): void => {
    forceUpdate();
  }, []);

  const handleCancel = useCallback((): void => {
    dialogService.state.confirm.onCancel();
  }, []);

  const handleConfirm = useCallback((): void => {
    dialogService.state.confirm.onConfirm();
  }, []);

  const handleKeyDown = useCallback((key: string): void => {
    switch (key) {
      case 'Escape':
        dialogService.state.confirm.onCancel();
        break;
      case 'Enter':
        dialogService.state.confirm.onConfirm();
        break;
      default:
        break;
    }
  }, []);

  useEffect((): () => void => {
    dialogService.on('changed', handleServiceChanged);

    return (): void => {
      dialogService.removeListener('changed', handleServiceChanged);
    };
  }, []);

  return (
    <Modal
      attach='center'
      portalRootNode={ excecutionEnvironment.canUseDom ? portalRootNode ?? getPortalRootNode() : undefined }
      showHeader={ false }
      isVisible={ dialogService.state.confirm.isVisible }
      className={ classNames(classes.Dialogs, className) }
      onKeyDown={ handleKeyDown }
      onCancel={ handleCancel }
    >
      <Headline level='2' withPermalink={ false } textAlign='center'>
        { dialogService.state.confirm.title }
      </Headline>
      <div className={ classes.Actions }>
        <Button id='dialogs-confirm-action-cancel' adjust='auto' onClick={ handleCancel }>
          { dialogService.state.confirm.actions.cancel }
        </Button>
        <Button id='dialogs-confirm-action-confirm' adjust='flex' onClick={ handleConfirm } isPrimary={ true } autoFocus={ true }>
          { dialogService.state.confirm.actions.confirm }
        </Button>
      </div>
    </Modal>
  );
};

Dialogs.displayName = 'Dialogs';

export { Dialogs };
