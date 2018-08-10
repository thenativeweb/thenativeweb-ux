'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _logos = require('./logos');

var _logos2 = _interopRequireDefault(_logos);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return (0, _defineProperty3.default)({
    Product: {
      display: 'flex',
      'flex-direction': 'column',
      overflow: 'hidden',
      'align-items': 'center',
      'justify-content': 'center',
      'font-family': theme.font.family.headline
    },

    IsCollapsed: {
      '& *': {
        animation: 'none'
      }
    },

    Name: {
      'text-align': 'center',
      'margin-top': '3px',
      color: theme.color.brand.white
    },

    CompositeName: {
      'text-align': 'center',
      'margin-top': '3px',
      color: theme.color.brand.highlight,

      '& span': {
        color: theme.color.brand.white
      }
    },

    SizeM: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.small
      }
    },

    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.large
      }
    },

    SizeXL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.xlarge
      }
    }

  }, theme.device.medium, {
    Name: {},

    SizeL: {
      '& $Name': {
        'font-size': theme.font.size.large
      }
    }
  });
};

var Product = function Product(_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      isAnimated = _ref2.isAnimated,
      name = _ref2.name,
      size = _ref2.size,
      theme = _ref2.theme,
      type = _ref2.type;

  var brandClassNames = (0, _classnames2.default)(classes.Product, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty3.default)(_classNames, classes.SizeXL, size === 'xl'), _classNames));

  var nameComponent = _react2.default.createElement(
    'div',
    { className: classes.Name },
    name
  );
  var logoId = theme.id;

  if (name === 'wolkenkit') {
    nameComponent = _react2.default.createElement(
      'div',
      { className: classes.CompositeName },
      _react2.default.createElement(
        'span',
        null,
        'wolken'
      ),
      'kit'
    );
    logoId = 'wolkenkit';
  }

  var Logo = _logos2.default[logoId] || _logos2.default.thenativeweb || null;

  return _react2.default.createElement(
    'div',
    { className: brandClassNames },
    type === 'typo-only' ? null : _react2.default.createElement(Logo, { isAnimated: isAnimated, size: size }),
    type === 'logo-only' ? null : nameComponent
  );
};

Product.propTypes = {
  name: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['m', 'l', 'xl']),
  type: _propTypes2.default.oneOf(['default', 'typo-only', 'logo-only'])
};

Product.defaultProps = {
  size: 'm',
  name: undefined,
  type: 'default'
};

exports.default = (0, _reactJss2.default)(styles)(Product);