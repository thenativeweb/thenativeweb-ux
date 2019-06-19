"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  Label: {
    display: 'block',
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit'
  }
};

var Label = function Label(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      id = _ref.id;
  return _react["default"].createElement("div", {
    id: id,
    className: (0, _styles.classNames)(classes.Label, className)
  }, children);
};

var _default = (0, _styles.withStyles)(styles)(Label);

exports["default"] = _default;