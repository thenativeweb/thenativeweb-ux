"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _Dialogs = _interopRequireDefault(require("../Dialogs"));

var _Icons = _interopRequireDefault(require("../Icons"));

var _Notifications = _interopRequireDefault(require("../Notifications"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    '@global': _objectSpread({}, (0, _styles.createDefaultStyles)({
      theme: theme
    })),
    Website: {}
  };
};

var Website = function Website(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      style = _ref.style,
      useDialogs = _ref.useDialogs,
      useNotifications = _ref.useNotifications;
  var componentClasses = (0, _classnames["default"])(classes.Website, className);
  return _react["default"].createElement("div", {
    className: componentClasses,
    style: style
  }, _react["default"].createElement("span", {
    suppressHydrationWarning: true
  }, _react["default"].createElement(_Icons["default"], null), useDialogs ? _react["default"].createElement(_Dialogs["default"], null) : null, useNotifications ? _react["default"].createElement(_Notifications["default"], null) : null), children);
};

Website.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  useDialogs: _propTypes["default"].bool,
  useNotifications: _propTypes["default"].bool
};
Website.defaultProps = {
  useDialogs: false,
  useNotifications: false
};

var _default = (0, _styles.withStyles)(styles)(Website);

exports["default"] = _default;