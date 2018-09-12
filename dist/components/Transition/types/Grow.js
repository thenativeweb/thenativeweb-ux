"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _animejs = _interopRequireDefault(require("animejs"));

var _defaults = _interopRequireDefault(require("./defaults"));

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var handleEnter = function handleEnter(node) {
  (0, _animejs.default)({
    targets: node,
    opacity: [0, 1],
    scaleY: [0.5, 1],
    duration: _defaults.default.duration,
    easing: _defaults.default.easing
  });
};

var handleExit = function handleExit(node) {
  (0, _animejs.default)({
    targets: node,
    opacity: [1, 0],
    scaleY: [1, 0],
    duration: _defaults.default.duration,
    easing: _defaults.default.easing
  });
};

var Grow = function Grow(props) {
  return _react.default.createElement(_reactTransitionGroup.Transition, {
    key: props.key,
    in: props.in,
    appear: false,
    mountOnEnter: true,
    unmountOnExit: true,
    onEnter: handleEnter,
    onExit: handleExit,
    timeout: _defaults.default.duration
  }, props.children);
};

var _default = Grow;
exports.default = _default;