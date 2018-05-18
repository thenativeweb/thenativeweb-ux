import { Transition as CustomTransition } from 'react-transition-group';
import Group from './Group';
import PropTypes from 'prop-types';
import React from 'react';
import types from './types';

const Transition = function (props) {
  const TransitionType = types[props.type];

  return (
    <TransitionType in={ props.in }>
      { props.children }
    </TransitionType>
  );
};

Transition.propTypes = {
  in: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(types))
};

Transition.defaultProps = {
  type: 'FadeInLeft'
};

Transition.Custom = CustomTransition;
Transition.Group = Group;

export default Transition;
