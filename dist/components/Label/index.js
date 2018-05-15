import classNames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';

var styles = {
  Label: {
    display: 'block',
    'flex-grow': 1,
    'flex-shrink': 1,
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    color: 'inherit'
  }
};

var Label = function Label(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;

  return React.createElement(
    'div',
    { className: classNames(classes.Label, className) },
    children
  );
};

export default injectSheet(styles)(Label);