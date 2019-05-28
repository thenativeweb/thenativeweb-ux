"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    Footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: "".concat(theme.space(2), "px"),
      paddingBottom: "".concat(theme.space(2), "px"),
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };
};

var Footer = function Footer(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react["default"].createElement("div", {
    className: classes.Footer
  }, children);
};

var _default = (0, _styles.withStyles)(styles)(Footer);

exports["default"] = _default;