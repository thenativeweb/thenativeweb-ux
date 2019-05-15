"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJss = require("react-jss");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _themes = _interopRequireDefault(require("../../themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  var themeForChildren;

  if (typeof theme === 'string' && _themes["default"][theme]) {
    themeForChildren = _themes["default"][theme];
  } else {
    themeForChildren = theme;
  }

  return _react["default"].createElement(_reactJss.ThemeProvider, {
    theme: themeForChildren || _themes["default"].thenativeweb
  }, children);
};

ThemeProvider.propTypes = {
  /** Either 'thenativeweb', 'wolkenkit' or a custom theme object. */
  theme: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
ThemeProvider.defaultProps = {
  theme: 'thenativeweb'
};
var _default = ThemeProvider;
exports["default"] = _default;