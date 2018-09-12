"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var sheets = new _reactJss.SheetsRegistry();

var ServerSideProvider = function ServerSideProvider(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_reactJss.JssProvider, {
    registry: sheets
  }, children);
};

ServerSideProvider.getStyles = function () {
  return sheets.toString();
};

var _default = ServerSideProvider;
exports.default = _default;