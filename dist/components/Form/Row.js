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
    Row: {
      display: 'flex',
      marginBottom: "".concat(theme.space(2), "px")
    }
  };
};

var Row = function Row(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react["default"].createElement("div", {
    className: classes.Row
  }, children);
};

var _default = (0, _styles.withStyles)(styles)(Row);

exports["default"] = _default;