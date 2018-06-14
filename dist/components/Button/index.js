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

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.js');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hint = function Hint(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react2.default.createElement(
    'span',
    { className: classes.Hint },
    children
  );
};

var Button = function Button(_ref2) {
  var _classNames;

  var autoFocus = _ref2.autoFocus,
      adjust = _ref2.adjust,
      children = _ref2.children,
      classes = _ref2.classes,
      className = _ref2.className,
      id = _ref2.id,
      icon = _ref2.icon,
      iconSize = _ref2.iconSize,
      onClick = _ref2.onClick,
      isPrimary = _ref2.isPrimary,
      isSubtle = _ref2.isSubtle,
      size = _ref2.size,
      style = _ref2.style,
      type = _ref2.type;

  var componentClasses = (0, _classnames2.default)(classes.Button, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty3.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty3.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.TypeSubtle, isSubtle === true), (0, _defineProperty3.default)(_classNames, classes.TypePrimary, isPrimary === true), (0, _defineProperty3.default)(_classNames, classes.TypeIcon, icon), (0, _defineProperty3.default)(_classNames, classes.TypeIconOnly, icon && !children), _classNames), className);

  var buttonType = type || (isPrimary ? 'submit' : 'button');

  return _react2.default.createElement(
    'button',
    {
      autoFocus: autoFocus,
      id: id,
      type: buttonType,
      className: componentClasses,
      style: style,
      onClick: onClick
    },
    icon ? _react2.default.createElement(_Icon2.default, { className: classes.Icon, name: icon, size: iconSize }) : null,
    children ? _react2.default.createElement(
      _Label2.default,
      { className: classes.Label },
      children
    ) : null
  );
};

Button.propTypes = {
  adjust: _propTypes2.default.oneOf(['flex', 'auto']),
  autoFocus: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  iconSize: _propTypes2.default.oneOf(['default', 'xs', 's', 'm', 'l']),
  isPrimary: _propTypes2.default.bool,
  isSubtle: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['s', 'm']),
  type: _propTypes2.default.oneOf(['button', 'submit', 'reset']),
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'm',
  type: undefined,
  onClick: function onClick() {}
};

Button.Hint = (0, _reactJss2.default)({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

exports.default = (0, _reactJss2.default)(_styles2.default)(Button);