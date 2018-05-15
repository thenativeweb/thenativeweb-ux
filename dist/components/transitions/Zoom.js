'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleEnter = function handleEnter(node) {
  (0, _animejs2.default)({
    targets: node,
    opacity: [0, 1],
    translateY: ['-10%', 0],
    scale: [0.95, 1],
    duration: _defaults2.default.duration,
    easing: _defaults2.default.easing
  });
};

var handleExit = function handleExit(node) {
  (0, _animejs2.default)({
    targets: node,
    opacity: [1, 0],
    translateY: [0, '-10%'],
    scale: [1, 0.95],
    duration: _defaults2.default.duration,
    easing: _defaults2.default.easing
  });
};

var Zoom = function Zoom(props) {
  return _react2.default.createElement(
    _reactTransitionGroup.Transition,
    {
      key: props.key,
      'in': props.in,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      onEnter: handleEnter,
      onExit: handleExit,
      timeout: _defaults2.default.duration
    },
    props.children
  );
};

exports.default = Zoom;