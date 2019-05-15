"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("../Label"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _styles2 = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Hint = function Hint(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react["default"].createElement("span", {
    className: classes.Hint
  }, children);
};

var Button = function Button(_ref2) {
  var _classNames;

  var autoFocus = _ref2.autoFocus,
      adjust = _ref2.adjust,
      children = _ref2.children,
      classes = _ref2.classes,
      className = _ref2.className,
      id = _ref2.id,
      icon = _ref2.icon,
      iconSize = _ref2.iconSize,
      onClick = _ref2.onClick,
      isPrimary = _ref2.isPrimary,
      isSubtle = _ref2.isSubtle,
      size = _ref2.size,
      style = _ref2.style,
      type = _ref2.type;
  var componentClasses = (0, _styles2.classNames)(classes.Button, (_classNames = {}, _defineProperty(_classNames, classes.AdjustFlex, adjust === 'flex'), _defineProperty(_classNames, classes.AdjustAuto, adjust === 'auto'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.TypeSubtle, isSubtle === true), _defineProperty(_classNames, classes.TypePrimary, isPrimary === true), _defineProperty(_classNames, classes.TypeIcon, icon), _defineProperty(_classNames, classes.TypeIconOnly, icon && !children), _classNames), className);
  var buttonType = type || (isPrimary ? 'submit' : 'button');
  /* eslint-disable react/button-has-type */

  return _react["default"].createElement("button", {
    autoFocus: autoFocus,
    id: id,
    type: buttonType,
    className: componentClasses,
    style: style,
    onClick: onClick
  }, icon ? _react["default"].createElement(_Icon["default"], {
    className: classes.Icon,
    name: icon,
    size: iconSize
  }) : null, children ? _react["default"].createElement(_Label["default"], {
    className: classes.Label
  }, children) : null);
  /* eslint-enable react/button-has-type */
};

Button.propTypes = {
  adjust: _propTypes["default"].oneOf(['flex', 'auto']),
  autoFocus: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  iconSize: _propTypes["default"].oneOf(['default', 'xs', 's', 'm', 'l']),
  isPrimary: _propTypes["default"].bool,
  isSubtle: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['s', 'm']),
  type: _propTypes["default"].oneOf(['button', 'submit', 'reset']),
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'm',
  type: undefined,
  onClick: function onClick() {// Intentionally left bla
  }
};
Button.Hint = (0, _styles2.withStyles)({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

var _default = (0, _styles2.withStyles)(_styles["default"])(Button);

exports["default"] = _default;