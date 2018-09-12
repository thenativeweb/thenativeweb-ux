"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactJss = _interopRequireDefault(require("react-jss"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    Divider: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
      width: '100%',
      height: '1px',
      background: theme.color.brand.dark,
      opacity: 0.1,
      'margin-top': '18px',
      'margin-bottom': '24px',
      border: 'none'
    }
  };
};

var Divider = function Divider(_ref) {
  var classes = _ref.classes;
  return _react.default.createElement("hr", {
    className: classes.Divider
  });
};

var _default = (0, _reactJss.default)(styles)(Divider);

exports.default = _default;