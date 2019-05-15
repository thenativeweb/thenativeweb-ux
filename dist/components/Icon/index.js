"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _styles2 = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Icon = function Icon(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      style = _ref.style,
      type = _ref.type;
  var iconClassNames = (0, _styles2.classNames)(classes.Icon, (_classNames = {}, _defineProperty(_classNames, classes.ColorDefault, color === 'default'), _defineProperty(_classNames, classes.ColorCurrent, color === 'current'), _defineProperty(_classNames, classes.ColorHighlight, color === 'highlight'), _defineProperty(_classNames, classes.ColorWhite, color === 'white'), _defineProperty(_classNames, classes.TypeInline, type === 'inline'), _defineProperty(_classNames, classes.TypeFlexAuto, type === 'flex-auto'), _defineProperty(_classNames, classes.SizeXS, size === 'xs'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _defineProperty(_classNames, classes.SizeXL, size === 'xl'), _defineProperty(_classNames, classes.SizeXXL, size === 'xxl'), _classNames), className);
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: iconClassNames,
    role: "presentational",
    style: style
  }, _react["default"].createElement("use", {
    xlinkHref: "#icon-".concat(name)
  }));
};

Icon.propTypes = {
  name: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].oneOf(['default', 'current', 'highlight', 'white']),
  size: _propTypes["default"].oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  style: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['default', 'inline', 'flex-auto'])
};
Icon.defaultProps = {
  size: 's',
  color: 'default',
  type: 'default'
};

var _default = (0, _styles2.withStyles)(_styles["default"])(Icon);

exports["default"] = _default;