import anime from 'animejs';
import React from 'react';
import { Transition } from 'react-transition-group';

const DURATION = 300;

const handleEnter = function (node) {
  anime({
    targets: node,
    opacity: [ 0, 1 ],
    translateX: [ '-25%', 0 ],
    duration: DURATION,
    easing: 'easeOutExpo'
  });
};

const handleExit = function (node) {
  anime({
    targets: node,
    opacity: [ 1, 0 ],
    translateX: [ 0, '-25%' ],
    duration: DURATION,
    easing: 'easeOutExpo'
  });
};

const FadeInRight = ({ children, show }) => (
  <Transition
    in={ show }
    mountOnEnter={ true }
    unmountOnExit={ true }
    onEnter={ handleEnter }
    onExit={ handleExit }
    timeout={ DURATION }
  >
    { children }
  </Transition>
);

export default FadeInRight;
