"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyleCollector = function StyleCollector(_ref) {
  var children = _ref.children,
      collection = _ref.collection;
  return _react["default"].createElement(_reactJss.JssProvider, {
    registry: collection
  }, children);
};

StyleCollector.createCollection = function () {
  return new _reactJss.SheetsRegistry();
};

var _default = StyleCollector;
exports["default"] = _default;