"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _themes = _interopRequireDefault(require("../../themes"));

var _default = function _default(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  if (typeof theme === 'string' && _themes.default[theme]) {
    theme = _themes.default[theme];
  }

  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: theme || _themes.default.thenativeweb
  }, children);
};

exports.default = _default;