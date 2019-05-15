"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _styles2 = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var viewClassNames = (0, _styles2.classNames)(classes.View, (_classNames = {}, _defineProperty(_classNames, classes.OrientationCentered, orientation === 'centered'), _defineProperty(_classNames, classes.OrientationHorizontal, orientation === 'horizontal'), _defineProperty(_classNames, classes.OrientationVertical, orientation === 'vertical'), _defineProperty(_classNames, classes.AdjustFlex, adjust === 'flex'), _defineProperty(_classNames, classes.AdjustAuto, adjust === 'auto'), _defineProperty(_classNames, classes.AlignItemsCenter, alignItems === 'center'), _defineProperty(_classNames, classes.BackgroundDark, background === 'dark'), _defineProperty(_classNames, classes.BackgroundLight, background === 'light'), _defineProperty(_classNames, classes.JustifyContentCenter, justifyContent === 'center'), _defineProperty(_classNames, classes.ScrollableAuto, scrollable === 'auto'), _classNames), className);
  return _react["default"].createElement("div", {
    id: id,
    className: viewClassNames,
    style: style
  }, children);
};

View.propTypes = {
  adjust: _propTypes["default"].oneOf(['auto', 'flex']),
  alignItems: _propTypes["default"].oneOf(['center']),
  background: _propTypes["default"].oneOf(['dark', 'light']),
  justifyContent: _propTypes["default"].oneOf(['center']),
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical', 'centered']),
  scrollable: _propTypes["default"].oneOf([false, 'auto'])
};

var _default = (0, _styles2.withStyles)(_styles["default"])(View);

exports["default"] = _default;