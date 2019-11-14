import { createUseStyles } from '../../styles';
import Notification from './Notification';
import ReactDOM from 'react-dom';
import useForceUpdate from '../useForceUpdate';
import { excecutionEnvironment, getPortalRootNode, notifications } from '../../services';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';
import styles, { NotificationsClassNames } from './styles';
import { Theme, TransitionGroup } from '../..';

const useStyles = createUseStyles<Theme, NotificationsClassNames>(styles);

const Notifications: FunctionComponent = (): ReactElement | null => {
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
      <div className={ classes.Notifications }>
        <TransitionGroup type='FadeInLeft'>
          { notifications.state.items.map((notification): ReactElement => (
            <Notification key={ notification.id } type={ notification.type } text={ notification.text } />
          ))}
        </TransitionGroup>
      </div>
    ),
    getPortalRootNode()
  );
};

export default Notifications;
