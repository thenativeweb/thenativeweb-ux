import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  Brand: {
    'padding-bottom': theme.grid.stepSize * 2,
    'border-bottom': '1px solid rgba(255, 255, 255, 0.1)'
  }
});

const Brand = ({ children, classes }) => (
  <div className={ classes.Brand }>
    { children }
  </div>
);

export default injectSheet(styles)(Brand);
