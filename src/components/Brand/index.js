import injectSheet from 'react-jss';
import logos from './logos';
import MadeBy from './MadeBy';
import PoweredBy from './PoweredBy';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  Brand: {
    width: '100%',
    height: '100%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
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

Brand.MadeBy = MadeBy;
Brand.PoweredBy = PoweredBy;

Brand.propTypes = {
  color: PropTypes.oneOf([ 'default', 'monochrome' ]),
  isInteractive: PropTypes.bool,
  size: PropTypes.oneOf([ 's', 'm', 'l' ]),
  type: PropTypes.oneOf([ 'full', 'minimal' ])
};

Brand.defaultProps = {
  size: 'm',
  type: 'full'
};

export default injectSheet(styles)(Brand);
