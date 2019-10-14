import { NotificationType } from '../../../services/NotificationService';
import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { NotificationClassNames } from './styles';

interface NotificationProps {
  type: NotificationType;
  text: string;
}

const useStyles = createUseStyles<Theme, NotificationClassNames>(styles);

const Notification: FunctionComponent<NotificationProps> = ({
  type,
  text
}): ReactElement => {
  const classes = useStyles();

  const componentClasses = classNames(classes.Notification, {
    [classes.TypeError]: type === 'error',
    [classes.TypeSuccess]: type === 'success'
  });

  return (
    <div className={ componentClasses }>
      { text }
    </div>
  );
};

export default Notification;
