import anime from 'animejs';
import defaults from './defaults';
import React from 'react';
import { Transition } from 'react-transition-group';

const handleEnter = function (node) {
  anime({
    targets: node,
    opacity: [ 0, 1 ],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

const handleExit = function (node) {
  anime({
    targets: node,
    opacity: [ 1, 0 ],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

const Fade = ({ children, key, in: fadeIn }) => (
  <Transition
    key={ key }
    in={ fadeIn }
    appear={ true }
    mountOnEnter={ true }
    unmountOnExit={ true }
    onEnter={ handleEnter }
    onExit={ handleExit }
    timeout={ defaults.duration }
  >
    { children }
  </Transition>
);

export default Fade;
