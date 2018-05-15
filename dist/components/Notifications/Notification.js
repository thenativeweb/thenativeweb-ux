import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    Notification: {
      padding: '10px 15px',
      background: theme.color.brand.dark,
      'box-shadow': theme.shadow.overlay,
      'margin-bottom': theme.grid.stepSize,
      'font-family': theme.font.family.default
    },

    TypeError: {
      color: theme.color.brand.white,
      background: theme.color.state.error
    },

    TypeSuccess: {
      color: theme.color.brand.white,
      background: theme.color.state.success
    }
  };
};

var Notification = function Notification(_ref) {
  var _classNames;

  var classes = _ref.classes,
      type = _ref.type,
      text = _ref.text;

  var componentClasses = classNames(classes.Notification, (_classNames = {}, _defineProperty(_classNames, classes.TypeError, type === 'error'), _defineProperty(_classNames, classes.TypeSuccess, type === 'success'), _classNames));

  return React.createElement(
    'div',
    { className: componentClasses },
    text
  );
};

export default injectSheet(styles)(Notification);