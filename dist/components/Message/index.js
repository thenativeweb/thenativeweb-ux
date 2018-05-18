'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      isVisible = _ref.isVisible,
      type = _ref.type;

  var icon = type === 'default' ? null : type;

  var componentClasses = (0, _classnames2.default)(classes.Message, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.TypeInfo, type === 'info'), (0, _defineProperty3.default)(_classNames, classes.TypeError, type === 'error'), (0, _defineProperty3.default)(_classNames, classes.WithIcon, icon !== undefined), _classNames));

  if (isVisible === false) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: componentClasses },
    icon !== undefined ? _react2.default.createElement(
      'div',
      { className: classes.IconContainer },
      _react2.default.createElement(_Icon2.default, { className: classes.Icon, name: icon })
    ) : null,
    _react2.default.createElement(
      'div',
      { className: classes.Content },
      children
    )
  );
};

Message.propTypes = {
  isVisible: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['default', 'info', 'error'])
};

Message.defaultProps = {
  isVisible: true,
  type: 'default'
};

exports.default = (0, _reactJss2.default)(_styles2.default)(Message);