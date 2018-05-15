'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var viewClassNames = (0, _classnames2.default)(classes.View, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.OrientationCentered, orientation === 'centered'), (0, _defineProperty3.default)(_classNames, classes.OrientationHorizontal, orientation === 'horizontal'), (0, _defineProperty3.default)(_classNames, classes.OrientationVertical, orientation === 'vertical'), (0, _defineProperty3.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty3.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty3.default)(_classNames, classes.AlignItemsCenter, alignItems === 'center'), (0, _defineProperty3.default)(_classNames, classes.BackgroundDark, background === 'dark'), (0, _defineProperty3.default)(_classNames, classes.BackgroundLight, background === 'light'), (0, _defineProperty3.default)(_classNames, classes.JustifyContentCenter, justifyContent === 'center'), (0, _defineProperty3.default)(_classNames, classes.ScrollableAuto, scrollable === 'auto'), _classNames), className);

  return _react2.default.createElement(
    'div',
    { className: viewClassNames, style: style },
    children
  );
};

View.propTypes = {
  adjust: _propTypes2.default.oneOf(['auto', 'flex']),
  alignItems: _propTypes2.default.oneOf(['center']),
  background: _propTypes2.default.oneOf(['dark', 'light']),
  justifyContent: _propTypes2.default.oneOf(['center']),
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical', 'centered']),
  scrollable: _propTypes2.default.oneOf([false, 'auto'])
};

exports.default = (0, _reactJss2.default)(_styles2.default)(View);