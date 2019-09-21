import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: `${theme.space(2)}px`,
    paddingBottom: `${theme.space(2)}px`,
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  }
});

const Footer = ({ children, classes }) => (
  <div className={ classes.Footer }>
    { children }
  </div>
);

export default withStyles(styles)(Footer);
