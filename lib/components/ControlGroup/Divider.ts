import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Divider: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: '100%',
    height: '1px',
    background: theme.color.brand.dark,
    opacity: 0.1,
    marginTop: `${theme.space(2.5)}px`,
    marginBottom: `${theme.space(3)}px`,
    border: 'none'
  }
});

const Divider = ({ classes }) => (
  <hr
    className={ classes.Divider }
  />
);

export default withStyles(styles)(Divider);
