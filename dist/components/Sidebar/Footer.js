"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

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
  return _react.default.createElement("div", {
    className: classes.Footer
  }, children);
};

var _default = (0, _styles.withStyles)(styles)(Footer);

exports.default = _default;