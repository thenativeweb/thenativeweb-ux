import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  Divider: {
    'flex-grow': 0,
    'flex-shrink': 0,
    'flex-basis': 'auto',
    width: '100%',
    height: '1px',
    background: theme.color.brand.dark,
    opacity: 0.1,
    'margin-top': '18px',
    'margin-bottom': '24px',
    border: 'none'
  }
});

const Divider = ({ classes }) => (
  <hr
    className={ classes.Divider }
  />
);

export default injectSheet(styles)(Divider);
