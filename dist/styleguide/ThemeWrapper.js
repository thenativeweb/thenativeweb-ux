"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Application = _interopRequireDefault(require("../components/Application"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = _interopRequireDefault(require("../components/ThemeProvider"));

var _thenativeweb = _interopRequireDefault(require("../themes/thenativeweb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isFirstRender = true;

var _default = function _default(_ref) {
  var children = _ref.children;
  var Services = isFirstRender ? _Application["default"].Services : _react["default"].Fragment;
  isFirstRender = false;
  return _react["default"].createElement(_ThemeProvider["default"], {
    theme: _thenativeweb["default"]
  }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Services, null), children));
};

exports["default"] = _default;