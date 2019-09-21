import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = {
  Label: {
    display: 'block',
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
