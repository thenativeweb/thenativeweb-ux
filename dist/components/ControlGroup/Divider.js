import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    Divider: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
      width: '100%',
      height: '1px',
      background: theme.color.brand.dark,
      opacity: 0.1,
      'margin-top': '18px',
      'margin-bottom': '24px',
      border: 'none'
    }
  };
};

var Divider = function Divider(_ref) {
  var classes = _ref.classes;
  return React.createElement('hr', {
    className: classes.Divider
  });
};

export default injectSheet(styles)(Divider);