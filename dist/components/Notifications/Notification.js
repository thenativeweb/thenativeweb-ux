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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Notification: {
      padding: '10px 15px',
      background: theme.color.brand.dark,
      'box-shadow': theme.shadow.overlay,
      'margin-bottom': theme.grid.stepSize,
      'font-family': theme.font.family.default
    },

    TypeError: {
      color: theme.color.brand.white,
      background: theme.color.state.error
    },

    TypeSuccess: {
      color: theme.color.brand.white,
      background: theme.color.state.success
    }
  };
};

var Notification = function Notification(_ref) {
  var _classNames;

  var classes = _ref.classes,
      type = _ref.type,
      text = _ref.text;

  var componentClasses = (0, _classnames2.default)(classes.Notification, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.TypeError, type === 'error'), (0, _defineProperty3.default)(_classNames, classes.TypeSuccess, type === 'success'), _classNames));

  return _react2.default.createElement(
    'div',
    { className: componentClasses },
    text
  );
};

exports.default = (0, _reactJss2.default)(styles)(Notification);