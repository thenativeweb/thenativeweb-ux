import { Theme } from '../../../themes';
import { ApplicationClassNames, styles } from './styles';
import { classNames, createUseStyles } from '../../../styles';
import { Dialogs, Icons, Notifications } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface ApplicationProps {
  id?: string;
  className?: string;
  useDialogs?: boolean;
  useNotifications?: boolean;
  style?: any;
}

const useStyles = createUseStyles<Theme, ApplicationClassNames>(styles);

const Application: FunctionComponent<ApplicationProps> = ({
  id,
  children,
  className,
  style,
  useDialogs = true,
  useNotifications = true
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.Application, className);

  return (
    <div id={ id } className={ componentClasses } style={ style }>
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

Application.displayName = 'Application';

export { Application };
