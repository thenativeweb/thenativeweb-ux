import logos from './logos';
import MadeBy from './MadeBy';
import Pattern from './Pattern';
import PoweredBy from './PoweredBy';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Brand: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.color.brand.dark
  }
});

const Brand = ({ color, classes, size, type, isInteractive }) => {
  const Logo = logos[type];

  return (
    <div className={ classes.Brand }>
      <Logo color={ color } size={ size } isInteractive={ isInteractive } />
    </div>
  );
};

Brand.Pattern = Pattern;
Brand.MadeBy = MadeBy;
Brand.PoweredBy = PoweredBy;

Brand.propTypes = {
  color: PropTypes.oneOf([ 'default', 'monochrome' ]),
  isInteractive: PropTypes.bool,
  size: PropTypes.oneOf([ 'sm', 'md', 'lg' ]),
  type: PropTypes.oneOf([ 'full', 'minimal' ])
};

Brand.defaultProps = {
  size: 'md',
  type: 'full'
};

export default withStyles(styles)(Brand);
