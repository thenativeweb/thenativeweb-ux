import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Row: {
    display: 'flex',
    'margin-bottom': theme.grid.stepSize
  }
});

const Row = function ({ classes, children }) {
  return (
    <div className={ classes.Row }>{ children }</div>
  );
};

export default withStyles(styles)(Row);
