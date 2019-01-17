import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = {
  Label: {
    display: 'block',
    'flex-grow': 1,
    'flex-shrink': 1,
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    color: 'inherit'
  }
};

const Label = function ({ children, classes, className, id }) {
  return (
    <div id={ id } className={ classNames(classes.Label, className) }>
      { children }
    </div>
  );
};

export default withStyles(styles)(Label);
