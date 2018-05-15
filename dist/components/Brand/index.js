import injectSheet from 'react-jss';
import logos from './logos';
import MadeBy from './MadeBy';
import PoweredBy from './PoweredBy';
import Product from './Product';
import PropTypes from 'prop-types';
import React from 'react';

var styles = function styles(theme) {
  return {
    Brand: {
      width: '100%',
      height: '100%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      background: theme.color.brand.dark
    }
  };
};

var Brand = function Brand(_ref) {
  var color = _ref.color,
      classes = _ref.classes,
      size = _ref.size,
      type = _ref.type,
      isInteractive = _ref.isInteractive;

  var Logo = logos[type];

  return React.createElement(
    'div',
    { className: classes.Brand },
    React.createElement(Logo, { color: color, size: size, isInteractive: isInteractive })
  );
};

Brand.MadeBy = MadeBy;
Brand.PoweredBy = PoweredBy;
Brand.Product = Product;

Brand.propTypes = {
  color: PropTypes.oneOf(['default', 'monochrome']),
  isInteractive: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  type: PropTypes.oneOf(['full', 'minimal'])
};

Brand.defaultProps = {
  size: 'm',
  type: 'full'
};

export default injectSheet(styles)(Brand);