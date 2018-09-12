"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _react = _interopRequireDefault(require("react"));

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
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.Label, className)
  }, children);
};

var _default = (0, _reactJss.default)(styles)(Label);

exports.default = _default;