import classNames from 'classnames';
import Dialogs from '../Dialogs';
import Icons from '../Icons';
import Notifications from '../Notifications';
import PropTypes from 'prop-types';
import React from 'react';
import { createDefaultStyles, withStyles } from '../../styles';

const styles = theme => ({
  '@global': {
    ...createDefaultStyles({ theme })
  },

  Website: {}
});

const Website = ({ children, classes, className, style, useDialogs, useNotifications }) => {
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
