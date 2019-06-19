"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    Notification: {
      padding: '10px 15px',
      background: theme.color.brand.dark,
      boxShadow: theme.shadow.overlay,
      marginBottom: "".concat(theme.space(1.5), "px"),
      fontFamily: theme.font.family["default"]
    },
    TypeError: {
      color: theme.color.brand.white,
      background: theme.color.state.error
    },
    TypeSuccess: {
      color: theme.color.brand.white,
      background: theme.color.state.success
    }
  };
};

var Notification = function Notification(_ref) {
  var _classNames;

  var classes = _ref.classes,
      type = _ref.type,
      text = _ref.text;
  var componentClasses = (0, _styles.classNames)(classes.Notification, (_classNames = {}, _defineProperty(_classNames, classes.TypeError, type === 'error'), _defineProperty(_classNames, classes.TypeSuccess, type === 'success'), _classNames));
  return _react["default"].createElement("div", {
    className: componentClasses
  }, text);
};

var _default = (0, _styles.withStyles)(styles)(Notification);

exports["default"] = _default;