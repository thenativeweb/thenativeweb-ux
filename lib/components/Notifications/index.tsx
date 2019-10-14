import { createUseStyles } from '../../styles';
import Notification from './Notification';
import ReactDOM from 'react-dom';
import services from '../../services';
import useForceUpdate from '../useForceUpdate';
import React, { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';
import styles, { NotificationsClassNames } from './styles';
import { Theme, TransitionGroup } from '../..';

const useStyles = createUseStyles<Theme, NotificationsClassNames>(styles);

const Notifications: FunctionComponent = (): ReactElement | null => {
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  if (!services.excecutionEnvironment.canUseDom) {
    return null;
  }

  const handleServiceChanged = useCallback((): void => {
    forceUpdate();
  }, []);

  useEffect((): () => void => {
    services.notifications.on('changed', handleServiceChanged);

    return (): void => {
      services.notifications.removeListener('changed', handleServiceChanged);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <div className={ classes.Notifications }>
        <TransitionGroup type='FadeInLeft'>
          { services.notifications.state.items.map((notification): ReactElement => (
            <Notification key={ notification.id } type={ notification.type } text={ notification.text } />
          ))}
        </TransitionGroup>
      </div>
    ),
    services.getPortalRootNode()
  );
};

export default Notifications;
