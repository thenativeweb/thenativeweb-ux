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
    Row: {
      display: 'flex',
      'margin-bottom': theme.grid.stepSize
    }
  };
};

var Row = function Row(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react.default.createElement("div", {
    className: classes.Row
  }, children);
};

var _default = (0, _reactJss.default)(styles)(Row);

exports.default = _default;