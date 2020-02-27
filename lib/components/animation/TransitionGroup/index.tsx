import { TransitionGroup as ReactTransitionGroup } from 'react-transition-group';
import { TransitionType } from '../Transition/TransitionType';
import { types } from '../Transition/types';
import React, { FunctionComponent, ReactElement } from 'react';

interface TransitionGroupProps {
  type?: TransitionType;
}

const TransitionGroup: FunctionComponent<TransitionGroupProps> = ({
  children,
  type = 'FadeInLeft'
}): ReactElement => {
  const Transition = types[type];

  return (
    <ReactTransitionGroup component='span'>
      { React.Children.map(children, (child): ReactElement => <Transition>{ child }</Transition>)! }
    </ReactTransitionGroup>
  );
};

TransitionGroup.displayName = 'TransitionGroup';

export { TransitionGroup };
