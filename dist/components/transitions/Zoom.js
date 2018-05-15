import anime from 'animejs';
import defaults from './defaults';
import React from 'react';
import { Transition } from 'react-transition-group';

var handleEnter = function handleEnter(node) {
  anime({
    targets: node,
    opacity: [0, 1],
    translateY: ['-10%', 0],
    scale: [0.95, 1],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

var handleExit = function handleExit(node) {
  anime({
    targets: node,
    opacity: [1, 0],
    translateY: [0, '-10%'],
    scale: [1, 0.95],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

var Zoom = function Zoom(props) {
  return React.createElement(
    Transition,
    {
      key: props.key,
      'in': props.in,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      onEnter: handleEnter,
      onExit: handleExit,
      timeout: defaults.duration
    },
    props.children
  );
};

export default Zoom;