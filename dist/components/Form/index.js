import Actions from './Actions';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';

var styles = function styles(theme) {
  return {
    Form: {
      'font-family': theme.font.family.default
    }
  };
};

var Form = function Form(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      onSubmit = _ref.onSubmit;

  var componentClasses = classNames(classes.Form, className);

  if (onSubmit) {
    return React.createElement(
      'form',
      { className: componentClasses, onSubmit: onSubmit },
      children
    );
  }

  return React.createElement(
    'div',
    { className: componentClasses },
    children
  );
};

Form.Row = Row;
Form.Actions = Actions;

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  onSubmit: function onSubmit() {}
};

export default injectSheet(styles)(Form);