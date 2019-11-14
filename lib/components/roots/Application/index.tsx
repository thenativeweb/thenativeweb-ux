import classNames from 'classnames';
import { createUseStyles } from '../../../styles';
import Dialogs from '../../Dialogs';
import Icons from '../../graphics/Icons';
import Notifications from '../../Notifications';
import { Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ApplicationClassNames } from './styles';

interface ApplicationProps {
  className?: string;
  useDialogs?: boolean;
  useNotifications?: boolean;
  style?: any;
}

const useStyles = createUseStyles<Theme, ApplicationClassNames>(styles);

const Application: FunctionComponent<ApplicationProps> = ({
  children,
  className,
  style,
  useDialogs = true,
  useNotifications = true
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.Application, className);

  return (
    <div className={ componentClasses } style={ style }>
      <span suppressHydrationWarning={ true }>
        <Icons />
        { useDialogs ? <Dialogs /> : null }
        { useNotifications ? <Notifications /> : null }
      </span>

      <div className={ classes.ApplicationLayout }>
        { children }
      </div>
    </div>
  );
};

export default Application;
