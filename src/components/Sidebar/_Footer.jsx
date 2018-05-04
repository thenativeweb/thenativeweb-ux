import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  Footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    'padding-top': theme.grid.stepSize,
    'padding-bottom': theme.grid.stepSize,
    'border-top': '1px solid rgba(255, 255, 255, 0.1)'
  }
});

const Footer = ({ children, classes }) => (
  <div className={ classes.Footer }>
    { children }
  </div>
);

export default injectSheet(styles)(Footer);
