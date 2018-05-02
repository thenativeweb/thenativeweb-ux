import injectSheet from 'react-jss';
import React from 'react';

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

export default injectSheet(styles)(Row);
