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
    Pattern: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundSize: '300px 300px'
    },
    TypeDefault: {
      backgroundImage: theme.components.Pattern.backgroundImage,
      opacity: theme.components.Pattern.opacity
    }
  };
};

var Pattern = function Pattern() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type;

  var componentClasses = (0, _styles.classNames)(classes.Pattern, _defineProperty({}, classes.TypeDefault, type === 'default'), className);
  return _react["default"].createElement("div", {
    className: componentClasses
  }, children);
};

var _default = (0, _styles.withStyles)(styles)(Pattern);

exports["default"] = _default;