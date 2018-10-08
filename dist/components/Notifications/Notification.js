"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    Notification: {
      padding: '10px 15px',
      background: theme.color.brand.dark,
      'box-shadow': theme.shadow.overlay,
      'margin-bottom': theme.grid.stepSize,
      'font-family': theme.font.family.default
    },
    TypeError: {
      color: theme.color.brand.white,
      background: theme.color.state.error
    },
    TypeSuccess: {
      color: theme.color.brand.white,
      background: theme.color.state.success
    }
  };
};

var Notification = function Notification(_ref) {
  var _classNames;

  var classes = _ref.classes,
      type = _ref.type,
      text = _ref.text;
  var componentClasses = (0, _classnames.default)(classes.Notification, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.TypeError, type === 'error'), (0, _defineProperty2.default)(_classNames, classes.TypeSuccess, type === 'success'), _classNames));
  return _react.default.createElement("div", {
    className: componentClasses
  }, text);
};

var _default = (0, _reactJss.default)(styles)(Notification);

exports.default = _default;