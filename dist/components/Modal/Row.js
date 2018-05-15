import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    Row: {
      display: 'flex',
      'margin-bottom': theme.grid.stepSize
    }
  };
};

var Row = function Row(_ref) {
  var classes = _ref.classes,
      children = _ref.children;

  return React.createElement(
    'div',
    { className: classes.Row },
    children
  );
};

export default injectSheet(styles)(Row);