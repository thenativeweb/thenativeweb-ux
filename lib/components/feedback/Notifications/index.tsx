import { Notification } from './Notification';
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
}

const Notifications: FunctionComponent<NotificationsProps> = ({
  className,
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
    notifications.on('changed', handleServiceChanged);

    return (): void => {
      notifications.removeListener('changed', handleServiceChanged);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <div className={ classNames(classes.Notifications, className) }>
        <TransitionGroup type='FadeInLeft'>
          { notifications.state.items.map((notification): ReactElement => (
            <Notification key={ notification.id } type={ notification.type } text={ notification.text } />
          ))}
        </TransitionGroup>
      </div>
    ),
    portalRootNode || getPortalRootNode()
  );
};

export { Notifications };
