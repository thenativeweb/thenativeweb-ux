import React from 'react';
import { classNames, withStyles } from 'thenativeweb-ux';

const styles = theme => ({
  CustomComponent: {
    width: theme.components.CustomComponent.width
  },

  SizeLg: {
    fontSize: 24
  }
});

const CustomComponent = function ({ classes, className, children, id, size }) {
  const componentClasses = classNames(classes.CustomComponent, {
    [classes.SizeLg]: size === 'lg'
  }, className);

  return (
    <div id={ id } className={ componentClasses }>
      { children }
    </div>
  );
};

export default withStyles(styles)(CustomComponent);
