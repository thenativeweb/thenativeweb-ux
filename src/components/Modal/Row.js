import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Row: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

const Row = function ({ classes, children }) {
  return (
    <div className={ classes.Row }>{ children }</div>
  );
};

export default withStyles(styles)(Row);
