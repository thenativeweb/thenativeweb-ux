"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Brand = _interopRequireDefault(require("./Brand"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Item = _interopRequireDefault(require("./Item"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    Sidebar: {
      position: 'relative',
      'flex-grow': 0,
      'flex-shrink': 0,
      display: 'flex',
      'flex-direction': 'column',
      'box-sizing': 'content-box',
      width: theme.components.sidebar.width,
      background: theme.color.brand.dark,
      padding: "".concat(theme.grid.stepSize * 1.5, "px 0")
    }
  };
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      id = _ref.id;
  return _react["default"].createElement("div", {
    id: id,
    className: classes.Sidebar
  }, children);
};

Sidebar.Brand = _Brand["default"];
Sidebar.Footer = _Footer["default"];
Sidebar.Item = _Item["default"];

var _default = (0, _styles.withStyles)(styles)(Sidebar);

exports["default"] = _default;