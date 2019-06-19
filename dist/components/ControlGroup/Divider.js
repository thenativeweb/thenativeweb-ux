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
    Divider: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      width: '100%',
      height: '1px',
      background: theme.color.brand.dark,
      opacity: 0.1,
      marginTop: "".concat(theme.space(2.5), "px"),
      marginBottom: "".concat(theme.space(3), "px"),
      border: 'none'
    }
  };
};

var Divider = function Divider(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement("hr", {
    className: classes.Divider
  });
};

var _default = (0, _styles.withStyles)(styles)(Divider);

exports["default"] = _default;