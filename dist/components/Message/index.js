"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _styles2 = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Message = function Message(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      isVisible = _ref.isVisible,
      type = _ref.type;
  var icon = type === 'default' ? null : type;
  var componentClasses = (0, _styles2.classNames)(classes.Message, (_classNames = {}, _defineProperty(_classNames, classes.TypeInfo, type === 'info'), _defineProperty(_classNames, classes.TypeError, type === 'error'), _defineProperty(_classNames, classes.WithIcon, icon !== undefined), _classNames));

  if (isVisible === false) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: componentClasses
  }, icon !== undefined ? _react["default"].createElement("div", {
    className: classes.IconContainer
  }, _react["default"].createElement(_Icon["default"], {
    className: classes.Icon,
    name: icon
  })) : null, _react["default"].createElement("div", {
    className: classes.Content
  }, children));
};

Message.propTypes = {
  isVisible: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['default', 'info', 'error'])
};
Message.defaultProps = {
  isVisible: true,
  type: 'default'
};

var _default = (0, _styles2.withStyles)(_styles["default"])(Message);

exports["default"] = _default;