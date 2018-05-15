import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    Footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      'padding-top': theme.grid.stepSize,
      'padding-bottom': theme.grid.stepSize,
      'border-top': '1px solid rgba(255, 255, 255, 0.1)'
    }
  };
};

var Footer = function Footer(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return React.createElement(
    'div',
    { className: classes.Footer },
    children
  );
};

export default injectSheet(styles)(Footer);