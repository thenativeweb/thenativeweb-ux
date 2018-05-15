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
    Brand: {
      'padding-bottom': theme.grid.stepSize * 2,
      'border-bottom': '1px solid rgba(255, 255, 255, 0.1)'
    }
  };
};

var Brand = function Brand(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.Brand },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Brand);