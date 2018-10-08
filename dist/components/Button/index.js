"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Label = _interopRequireDefault(require("../Label"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.js"));

var Hint = function Hint(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react.default.createElement("span", {
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
  var componentClasses = (0, _classnames.default)(classes.Button, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty2.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty2.default)(_classNames, classes.TypeSubtle, isSubtle === true), (0, _defineProperty2.default)(_classNames, classes.TypePrimary, isPrimary === true), (0, _defineProperty2.default)(_classNames, classes.TypeIcon, icon), (0, _defineProperty2.default)(_classNames, classes.TypeIconOnly, icon && !children), _classNames), className);
  var buttonType = type || (isPrimary ? 'submit' : 'button');
  return _react.default.createElement("button", {
    autoFocus: autoFocus,
    id: id,
    type: buttonType,
    className: componentClasses,
    style: style,
    onClick: onClick
  }, icon ? _react.default.createElement(_Icon.default, {
    className: classes.Icon,
    name: icon,
    size: iconSize
  }) : null, children ? _react.default.createElement(_Label.default, {
    className: classes.Label
  }, children) : null);
};

Button.propTypes = {
  adjust: _propTypes.default.oneOf(['flex', 'auto']),
  autoFocus: _propTypes.default.bool,
  icon: _propTypes.default.string,
  iconSize: _propTypes.default.oneOf(['default', 'xs', 's', 'm', 'l']),
  isPrimary: _propTypes.default.bool,
  isSubtle: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['s', 'm']),
  type: _propTypes.default.oneOf(['button', 'submit', 'reset']),
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'm',
  type: undefined,
  onClick: function onClick() {}
};
Button.Hint = (0, _reactJss.default)({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

var _default = (0, _reactJss.default)(_styles.default)(Button);

exports.default = _default;