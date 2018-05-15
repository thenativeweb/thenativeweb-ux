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
    Divider: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
      width: '100%',
      height: '1px',
      background: theme.color.brand.dark,
      opacity: 0.1,
      'margin-top': '18px',
      'margin-bottom': '24px',
      border: 'none'
    }
  };
};

var Divider = function Divider(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement('hr', {
    className: classes.Divider
  });
};

exports.default = (0, _reactJss2.default)(styles)(Divider);