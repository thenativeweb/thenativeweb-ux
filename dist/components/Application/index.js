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

var _View = _interopRequireDefault(require("../View"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    '@global': {
      '@import': "url('".concat(theme.font["import"], "')")
    },
    Application: {
      position: 'absolute !important',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  };
};

var Application = function Application(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      style = _ref.style,
      orientation = _ref.orientation;
  var componentClasses = (0, _classnames["default"])(classes.Application, className);
  return _react["default"].createElement(_View["default"], {
    className: componentClasses,
    orientation: orientation,
    style: style
  }, children);
};

Application.propTypes = {
  className: _propTypes["default"].string,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical', 'centered']),
  style: _propTypes["default"].object
};
Application.defaultProps = {
  orientation: 'horizontal'
};

Application.Services = function () {
  return _react["default"].createElement("span", {
    suppressHydrationWarning: true
  }, _react["default"].createElement(_Icons["default"], null), _react["default"].createElement(_Dialogs["default"], null), _react["default"].createElement(_Notifications["default"], null));
};

var _default = (0, _styles.withStyles)(styles)(Application);

exports["default"] = _default;