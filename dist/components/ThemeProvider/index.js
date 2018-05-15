'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _themes = require('../../themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  if (typeof theme === 'string' && _themes2.default[theme]) {
    theme = _themes2.default[theme];
  }

  return _react2.default.createElement(
    _reactJss.ThemeProvider,
    { theme: theme || _themes2.default.thenativeweb },
    children
  );
};