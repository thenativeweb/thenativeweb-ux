"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _animejs = _interopRequireDefault(require("animejs"));

var _defaults = _interopRequireDefault(require("./defaults"));

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleEnter = function handleEnter(node) {
  (0, _animejs["default"])({
    targets: node,
    opacity: [0, 1],
    duration: _defaults["default"].duration,
    easing: _defaults["default"].easing
  });
};

var handleExit = function handleExit(node) {
  (0, _animejs["default"])({
    targets: node,
    opacity: [1, 0],
    duration: _defaults["default"].duration,
    easing: _defaults["default"].easing
  });
};

var Fade = function Fade(_ref) {
  var children = _ref.children,
      key = _ref.key,
      fadeIn = _ref["in"];
  return _react["default"].createElement(_reactTransitionGroup.Transition, {
    key: key,
    "in": fadeIn,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    onEnter: handleEnter,
    onExit: handleExit,
    timeout: _defaults["default"].duration
  }, children);
};

var _default = Fade;
exports["default"] = _default;