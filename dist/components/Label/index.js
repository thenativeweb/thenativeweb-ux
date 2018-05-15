'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  Label: {
    display: 'block',
    'flex-grow': 1,
    'flex-shrink': 1,
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    color: 'inherit'
  }
};

var Label = function Label(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.Label, className) },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Label);