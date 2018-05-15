import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    Actions: {
      display: 'flex',
      'justify-content': 'flex-end',
      'border-top': '1px solid ' + theme.color.content.border,
      'padding-top': theme.grid.stepSize,
      'margin-top': theme.grid.stepSize * 2
    }
  };
};

var Actions = function Actions(_ref) {
  var children = _ref.children,
      classes = _ref.classes;

  return React.createElement(
    'div',
    { className: classes.Actions },
    children
  );
};

export default injectSheet(styles)(Actions);