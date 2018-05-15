import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import Product from './Product';
import PropTypes from 'prop-types';
import React from 'react';

var styles = function styles(theme) {
  return {
    PoweredBy: {
      display: 'flex',
      'flex-direction': 'column',
      overflow: 'hidden',
      'align-items': 'center',
      'justify-content': 'center',
      'font-family': theme.font.family.default,
      'font-size': theme.font.size.small,
      background: theme.color.brand.dark,
      'text-align': 'center',
      'padding-top': theme.grid.stepSize / 2,
      'padding-bottom': theme.grid.stepSize / 2
    },

    Intro: {
      'margin-top': theme.grid.stepSize / 2,
      'margin-bottom': theme.grid.stepSize / 2,
      color: theme.color.brand.lightGrey
    },

    SizeL: {},
    SizeM: {}
  };
};

var PoweredBy = function PoweredBy(_ref) {
  var _classNames;

  var classes = _ref.classes,
      product = _ref.product,
      size = _ref.size;

  var componentClasses = classNames(classes.PoweredBy, (_classNames = {}, _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _classNames));

  return React.createElement(
    'div',
    { className: componentClasses },
    React.createElement(
      'div',
      { className: classes.Intro },
      'Powered by'
    ),
    React.createElement(Product, { name: product, size: size })
  );
};

PoweredBy.propTypes = {
  product: PropTypes.string,
  size: PropTypes.oneOf(['m', 'l'])
};

PoweredBy.defaultProps = {
  size: 'm',
  name: undefined
};

export default injectSheet(styles)(PoweredBy);