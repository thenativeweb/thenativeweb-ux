import anime from 'animejs';
import { defaults } from './defaults';
import { Transition } from 'react-transition-group';
import { TransitionProps } from './TransitionProps';
import React, { FunctionComponent, ReactElement } from 'react';

const handleEnter = function (node: HTMLElement): void {
  anime({
    targets: node,
    opacity: [ 0, 1 ],
    scaleY: [ 0.5, 1 ],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

const handleExit = function (node: HTMLElement): void {
  anime({
    targets: node,
    opacity: [ 1, 0 ],
    scaleY: [ 1, 0 ],
    duration: defaults.duration,
    easing: defaults.easing
  });
};

const Grow: FunctionComponent<TransitionProps> = ({ children, key, in: fadeIn }): ReactElement => (
  <Transition
    key={ key }
    in={ fadeIn }
    appear={ false }
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

export { Grow };
