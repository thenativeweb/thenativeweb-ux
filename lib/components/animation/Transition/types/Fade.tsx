import anime from 'animejs';
import { defaults } from './defaults';
import { Transition } from 'react-transition-group';
import { TransitionProps } from './TransitionProps';
import React, { FunctionComponent, ReactElement } from 'react';

const handleEnter = function (node: HTMLElement): void {
  anime({
    targets: node,
    opacity: [ 0, 1 ],
    duration: 600,
    easing: defaults.easing
  });
};

const handleExit = function (node: HTMLElement): void {
  anime({
    targets: node,
    opacity: [ 1, 0 ],
    duration: 600,
    easing: defaults.easing
  });
};

const Fade: FunctionComponent<TransitionProps> = ({ children, key, in: fadeIn }): ReactElement => (
  <Transition
    key={ key }
    in={ fadeIn }
    appear={ true }
    mountOnEnter={ true }
    unmountOnExit={ true }
    onEnter={ handleEnter }
    onExit={ handleExit }
    timeout={ 600 }
  >
    { children }
  </Transition>
);

export { Fade };
