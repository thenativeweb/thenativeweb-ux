import anime from 'animejs';
import defaults from './defaults';
import { Transition } from 'react-transition-group';
import { TransitionProps } from './TransitionProps';
import React, { FunctionComponent, ReactElement } from 'react';

const handleEnter = function (node: HTMLElement): void {
  anime({
    targets: node,
    opacity: [ 0, 1 ],
    translateY: [ '-10%', 0 ],
    scale: [ 0.95, 1 ],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

const handleExit = function (node: HTMLElement): void {
  anime({
    targets: node,
    opacity: [ 1, 0 ],
    translateY: [ 0, '-10%' ],
    scale: [ 1, 0.95 ],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

const Zoom: FunctionComponent<TransitionProps> = ({ children, key, in: zoomIn }): ReactElement => (
  <Transition
    key={ key }
    in={ zoomIn }
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
/* eslint-enable react/destructuring-assignment */

export default Zoom;
