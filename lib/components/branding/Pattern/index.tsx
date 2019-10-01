import Theme from '../../../themes/Theme';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

const styles = (theme: Theme): Styles => ({
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

interface PatternProps {
  classes: Classes;
  className?: 'string';
  type?: 'default';
}

const Pattern: FunctionComponent<PatternProps> = ({ children, classes, className, type = 'default' }): ReactElement => {
  const componentClasses = classNames(
    classes.Pattern,
    {
      [classes.TypeDefault]: type
    },
    className
  );

  return <div className={ componentClasses }>{ children }</div>;
};

export default withStyles(styles)(Pattern);
