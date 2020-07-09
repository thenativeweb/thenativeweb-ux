import { NotificationType } from '../../../../services/NotificationService';
import { classNames, createUseStyles } from '../../../../styles';
import { NotificationClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface NotificationProps {
  type: NotificationType;
  text: string;
}

const useStyles = createUseStyles<NotificationClassNames>(styles);

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

export { Notification };
