import { Classes } from 'jss';
import classNames from 'classnames';
import Dialogs from '../Dialogs';
import Icons from '../Icons';
import Notifications from '../Notifications';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface WebsiteProps {
  classes: Classes;
  className?: string;
  style?: CSSProperties;
  useDialogs?: boolean;
  useNotifications?: boolean;
}

const Website: FunctionComponent<WebsiteProps> = ({
  children,
  classes,
  className,
  style,
  useDialogs = false,
  useNotifications = false
}): ReactElement => {
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

Website.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  useDialogs: PropTypes.bool,
  useNotifications: PropTypes.bool
};

Website.defaultProps = {
  useDialogs: false,
  useNotifications: false
};

export default withStyles(styles)(Website);
