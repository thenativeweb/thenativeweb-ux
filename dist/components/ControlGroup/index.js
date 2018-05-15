import classNames from 'classnames';
import Divider from './Divider';
import injectSheet from 'react-jss';
import Item from './Item';
import PropTypes from 'prop-types';
import React from 'react';

var styles = {
  ControlGroup: {
    display: 'flex',
    'margin-bottom': '18px'
  }
};

var ControlGroup = function ControlGroup(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      children = _ref.children,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === undefined ? true : _ref$isVisible;

  var componentClasses = classNames(classes.ControlGroup, className);

  if (!isVisible) {
    return null;
  }

  return React.createElement('div', {
    className: componentClasses,
    children: children
  });
};

ControlGroup.Divider = Divider;
ControlGroup.Item = Item;

ControlGroup.propTypes = {
  isVisible: PropTypes.bool
};

export default injectSheet(styles)(ControlGroup);