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
    translateX: ['-25%', 0],
    duration: _defaults["default"].duration,
    easing: _defaults["default"].easing
  });
};

var handleExit = function handleExit(node) {
  (0, _animejs["default"])({
    targets: node,
    opacity: [1, 0],
    translateX: [0, '-25%'],
    duration: _defaults["default"].duration,
    easing: _defaults["default"].easing
  });
};
/* eslint-disable react/destructuring-assignment */


var FadeInRight = function FadeInRight(props) {
  return _react["default"].createElement(_reactTransitionGroup.Transition, {
    key: props.key,
    "in": props["in"],
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    onEnter: handleEnter,
    onExit: handleExit,
    timeout: _defaults["default"].duration
  }, props.children);
};
/* eslint-enable react/destructuring-assignment */


var _default = FadeInRight;
exports["default"] = _default;