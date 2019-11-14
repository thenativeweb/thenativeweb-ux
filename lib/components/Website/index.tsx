import classNames from 'classnames';
import { createUseStyles } from '../../styles';
import { Dialogs } from '../Dialogs';
import { Icons } from '../graphics/Icons';
import { Notifications } from '../Notifications';
import { Theme } from '../../themes';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';
import { styles, WebsiteClassNames } from './styles';

interface WebsiteProps {
  className?: string;
  style?: CSSProperties;
  useDialogs?: boolean;
  useNotifications?: boolean;
}

const useStyles = createUseStyles<Theme, WebsiteClassNames>(styles);

const Website: FunctionComponent<WebsiteProps> = ({
  children,
  className,
  style,
  useDialogs = false,
  useNotifications = false
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.Website, className);

  return (
    <div className={ componentClasses } style={ style }>
      <span suppressHydrationWarning={ true }>
        <Icons />
        { useDialogs ? <Dialogs /> : null }
        { useNotifications ? <Notifications /> : null }
      </span>

      { children }
    </div>
  );
};

export { Website };
