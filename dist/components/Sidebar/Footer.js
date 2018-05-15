'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      'padding-top': theme.grid.stepSize,
      'padding-bottom': theme.grid.stepSize,
      'border-top': '1px solid rgba(255, 255, 255, 0.1)'
    }
  };
};

var Footer = function Footer(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.Footer },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Footer);