import { Transition as CustomTransition } from 'react-transition-group';
import Group from './Group';
import PropTypes from 'prop-types';
import React from 'react';
import types from './types';

/* eslint-disable react/destructuring-assignment */
const Transition = function (props) {
  const TransitionType = types[props.type];

  return (
    <TransitionType in={ props.in }>
      { props.children }
    </TransitionType>
  );
};
/* eslint-enable react/destructuring-assignment */

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
