import { TransitionType } from './TransitionType';
import types from './types';
import React, { FunctionComponent, ReactElement } from 'react';

interface TransitionProps {
  type?: TransitionType;
  in?: boolean;
}

const Transition: FunctionComponent<TransitionProps> = ({
  type = 'FadeInLeft',
  in: transitionIn,
  children
}): ReactElement => {
  const TransitionComponent = types[type];

  return (
    <TransitionComponent in={ transitionIn }>
      { children }
    </TransitionComponent>
  );
};

export default Transition;
