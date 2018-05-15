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

var _Product = require('./Product');

var _Product2 = _interopRequireDefault(_Product);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var componentClasses = (0, _classnames2.default)(classes.PoweredBy, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.SizeL, size === 'l'), _classNames));

  return _react2.default.createElement(
    'div',
    { className: componentClasses },
    _react2.default.createElement(
      'div',
      { className: classes.Intro },
      'Powered by'
    ),
    _react2.default.createElement(_Product2.default, { name: product, size: size })
  );
};

PoweredBy.propTypes = {
  product: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['m', 'l'])
};

PoweredBy.defaultProps = {
  size: 'm',
  name: undefined
};

exports.default = (0, _reactJss2.default)(styles)(PoweredBy);