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
    Brand: {
      'padding-bottom': theme.grid.stepSize * 2,
      'border-bottom': '1px solid rgba(255, 255, 255, 0.1)'
    }
  };
};

var Brand = function Brand(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react.default.createElement("div", {
    className: classes.Brand
  }, children);
};

var _default = (0, _styles.withStyles)(styles)(Brand);

exports.default = _default;