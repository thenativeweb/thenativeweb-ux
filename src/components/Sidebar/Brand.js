import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Brand: {
    paddingBottom: `${theme.space(2)}px`,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  }
});

const Brand = ({ children, classes }) => (
  <div className={ classes.Brand }>
    { children }
  </div>
);

export default withStyles(styles)(Brand);
