import { TransitionGroup } from 'react-transition-group';
import { TransitionType } from '../Transition/TransitionType';
import types from '../Transition/types';
import React, { FunctionComponent, ReactElement } from 'react';

interface TransitionGroupProps {
  type?: TransitionType;
}

const Group: FunctionComponent<TransitionGroupProps> = ({
  children,
  type = 'FadeInLeft'
}): ReactElement => {
  const Transition = types[type];

  return (
    <TransitionGroup component='span'>
      { React.Children.map(children, (child): ReactElement => <Transition>{ child }</Transition>)}
    </TransitionGroup>
  );
};

export default Group;
