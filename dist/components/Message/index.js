import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

var Message = function Message(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      icon = _ref.icon,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === undefined ? true : _ref$isVisible,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'info' : _ref$type;

  var componentClasses = classNames(classes.Message, (_classNames = {}, _defineProperty(_classNames, classes.TypeInfo, type === 'info'), _defineProperty(_classNames, classes.TypeError, type === 'error'), _defineProperty(_classNames, classes.WithIcon, icon !== undefined), _classNames));

  if (isVisible === false) {
    return null;
  }

  return React.createElement(
    'div',
    { className: componentClasses },
    icon !== undefined ? React.createElement(
      'div',
      { className: classes.Icon },
      React.createElement(Icon, { name: icon })
    ) : null,
    React.createElement(
      'div',
      { className: classes.Content },
      children
    )
  );
};

Message.propTypes = {
  icon: PropTypes.string,
  isVisible: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'info', 'error'])
};

export default injectSheet(styles)(Message);