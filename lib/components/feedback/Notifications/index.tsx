import { Notification } from './Notification';
import { NotificationService } from '../../../services/NotificationService';
import ReactDOM from 'react-dom';
import { useForceUpdate } from '../../useForceUpdate';
import { classNames, createUseStyles } from '../../../styles';
import { excecutionEnvironment, getPortalRootNode, notifications } from '../../../services';
import { NotificationsClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';
import { Theme, TransitionGroup } from '../../..';

const useStyles = createUseStyles<Theme, NotificationsClassNames>(styles);

interface NotificationsProps {
  className?: string;
  portalRootNode?: HTMLElement;
  notificationService?: NotificationService;
}

const Notifications: FunctionComponent<NotificationsProps> = ({
  className,
  notificationService = notifications,
  portalRootNode
}): ReactElement | null => {
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  if (!excecutionEnvironment.canUseDom) {
    return null;
  }

  const handleServiceChanged = useCallback((): void => {
    forceUpdate();
  }, []);

  useEffect((): () => void => {
    notificationService.on('changed', handleServiceChanged);

    return (): void => {
      notificationService.removeListener('changed', handleServiceChanged);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <div className={ classNames(classes.Notifications, className) }>
        <TransitionGroup type='FadeInLeft'>
          { notificationService.state.items.map((notification): ReactElement => (
            <Notification key={ notification.id } type={ notification.type } text={ notification.text } />
          ))}
        </TransitionGroup>
      </div>
    ),
    portalRootNode || getPortalRootNode()
  );
};

export { Notifications };
