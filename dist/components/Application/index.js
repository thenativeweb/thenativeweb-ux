import Dialogs from '../Dialogs';
import Icons from '../Icons';
import injectSheet from 'react-jss';
import Notifications from '../Notifications';
import PropTypes from 'prop-types';
import React from 'react';
import View from '../View';

var styles = function styles(theme) {
  return {
    '@global': {
      '@import': 'url(\'' + theme.font.import + '\')'
    },
    Application: {
      position: 'absolute !important',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  };
};

var Application = function Application(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      style = _ref.style,
      orientation = _ref.orientation;
  return React.createElement(
    View,
    { className: classes.Application, orientation: orientation, style: style },
    children
  );
};

Application.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical', 'centered'])
};

Application.defaultProps = {
  orientation: 'horizontal'
};

Application.Services = function () {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Icons, null),
    React.createElement(Dialogs, null),
    React.createElement(Notifications, null)
  );
};

export default injectSheet(styles)(Application);