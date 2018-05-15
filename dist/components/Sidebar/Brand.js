import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    Brand: {
      'padding-bottom': theme.grid.stepSize * 2,
      'border-bottom': '1px solid rgba(255, 255, 255, 0.1)'
    }
  };
};

var Brand = function Brand(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return React.createElement(
    'div',
    { className: classes.Brand },
    children
  );
};

export default injectSheet(styles)(Brand);