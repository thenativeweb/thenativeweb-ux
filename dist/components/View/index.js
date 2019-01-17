"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _styles2 = require("../../styles");

var View = function View(_ref) {
  var _classNames;

  var adjust = _ref.adjust,
      alignItems = _ref.alignItems,
      background = _ref.background,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      id = _ref.id,
      justifyContent = _ref.justifyContent,
      scrollable = _ref.scrollable,
      style = _ref.style,
      orientation = _ref.orientation;
  var viewClassNames = (0, _styles2.classNames)(classes.View, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.OrientationCentered, orientation === 'centered'), (0, _defineProperty2.default)(_classNames, classes.OrientationHorizontal, orientation === 'horizontal'), (0, _defineProperty2.default)(_classNames, classes.OrientationVertical, orientation === 'vertical'), (0, _defineProperty2.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty2.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty2.default)(_classNames, classes.AlignItemsCenter, alignItems === 'center'), (0, _defineProperty2.default)(_classNames, classes.BackgroundDark, background === 'dark'), (0, _defineProperty2.default)(_classNames, classes.BackgroundLight, background === 'light'), (0, _defineProperty2.default)(_classNames, classes.JustifyContentCenter, justifyContent === 'center'), (0, _defineProperty2.default)(_classNames, classes.ScrollableAuto, scrollable === 'auto'), _classNames), className);
  return _react.default.createElement("div", {
    id: id,
    className: viewClassNames,
    style: style
  }, children);
};

View.propTypes = {
  adjust: _propTypes.default.oneOf(['auto', 'flex']),
  alignItems: _propTypes.default.oneOf(['center']),
  background: _propTypes.default.oneOf(['dark', 'light']),
  justifyContent: _propTypes.default.oneOf(['center']),
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical', 'centered']),
  scrollable: _propTypes.default.oneOf([false, 'auto'])
};

var _default = (0, _styles2.withStyles)(_styles.default)(View);

exports.default = _default;