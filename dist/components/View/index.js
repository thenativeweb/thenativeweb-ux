import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

var View = function View(_ref) {
  var _classNames;

  var adjust = _ref.adjust,
      alignItems = _ref.alignItems,
      background = _ref.background,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      justifyContent = _ref.justifyContent,
      scrollable = _ref.scrollable,
      style = _ref.style,
      orientation = _ref.orientation;

  var viewClassNames = classNames(classes.View, (_classNames = {}, _defineProperty(_classNames, classes.OrientationCentered, orientation === 'centered'), _defineProperty(_classNames, classes.OrientationHorizontal, orientation === 'horizontal'), _defineProperty(_classNames, classes.OrientationVertical, orientation === 'vertical'), _defineProperty(_classNames, classes.AdjustFlex, adjust === 'flex'), _defineProperty(_classNames, classes.AdjustAuto, adjust === 'auto'), _defineProperty(_classNames, classes.AlignItemsCenter, alignItems === 'center'), _defineProperty(_classNames, classes.BackgroundDark, background === 'dark'), _defineProperty(_classNames, classes.BackgroundLight, background === 'light'), _defineProperty(_classNames, classes.JustifyContentCenter, justifyContent === 'center'), _defineProperty(_classNames, classes.ScrollableAuto, scrollable === 'auto'), _classNames), className);

  return React.createElement(
    'div',
    { className: viewClassNames, style: style },
    children
  );
};

View.propTypes = {
  adjust: PropTypes.oneOf(['auto', 'flex']),
  alignItems: PropTypes.oneOf(['center']),
  background: PropTypes.oneOf(['dark', 'light']),
  justifyContent: PropTypes.oneOf(['center']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical', 'centered']),
  scrollable: PropTypes.oneOf([false, 'auto'])
};

export default injectSheet(styles)(View);