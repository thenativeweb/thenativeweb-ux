'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dialogs = require('../Dialogs');

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Icons = require('../Icons');

var _Icons2 = _interopRequireDefault(_Icons);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Notifications = require('../Notifications');

var _Notifications2 = _interopRequireDefault(_Notifications);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    _View2.default,
    { className: classes.Application, orientation: orientation, style: style },
    children
  );
};

Application.propTypes = {
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical', 'centered'])
};

Application.defaultProps = {
  orientation: 'horizontal'
};

Application.Services = function () {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_Icons2.default, null),
    _react2.default.createElement(_Dialogs2.default, null),
    _react2.default.createElement(_Notifications2.default, null)
  );
};

exports.default = (0, _reactJss2.default)(styles)(Application);