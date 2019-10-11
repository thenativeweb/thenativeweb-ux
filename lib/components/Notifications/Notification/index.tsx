import { Classes } from 'jss';
import { NotificationType } from '../../../services/NotificationService';
import styles from './styles';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface NotificationProps {
  classes: Classes;
  type: NotificationType;
  text: string;
}

const Notification: FunctionComponent<NotificationProps> = ({
  classes,
  type,
  text
}): ReactElement => {
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

export default withStyles(styles)(Notification);
