import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Pattern: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundSize: '300px 300px'
  },

  TypeDefault: {
    backgroundImage: theme.components.Pattern.backgroundImage,
    opacity: theme.components.Pattern.opacity
  }
});

const Pattern = function ({ children, classes, className, type = 'default' } = {}) {
  const componentClasses = classNames(classes.Pattern, {
    [classes.TypeDefault]: type === 'default'
  }, className);

  return <div className={ componentClasses }>{ children }</div>;
};

export default withStyles(styles)(Pattern);
