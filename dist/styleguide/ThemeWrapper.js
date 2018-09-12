"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Application = _interopRequireDefault(require("../components/Application"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = _interopRequireDefault(require("../components/ThemeProvider"));

var _thenativeweb = _interopRequireDefault(require("../themes/thenativeweb"));

var isFirstRender = true;

var _default = function _default(props) {
  var Services = isFirstRender ? _Application.default.Services : _react.default.Fragment;
  isFirstRender = false;
  return _react.default.createElement(_ThemeProvider.default, {
    theme: _thenativeweb.default
  }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Services, null), props.children));
};

exports.default = _default;