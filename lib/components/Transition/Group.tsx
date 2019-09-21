import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import types from './types';

const Group = function ({ children, type }) {
  const Transition = types[type];

  return (
    <TransitionGroup>
      { React.Children.map(children, child => <Transition>{ child }</Transition>)}
    </TransitionGroup>
  );
};

Group.propTypes = {
  type: PropTypes.oneOf(Object.keys(types))
};

Group.defaultProps = {
  type: 'FadeInLeft'
};

export default Group;
