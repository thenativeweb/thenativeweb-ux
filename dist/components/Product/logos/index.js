"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TheNativeWeb = _interopRequireDefault(require("./TheNativeWeb"));

var _Wolkenkit = _interopRequireDefault(require("./Wolkenkit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  thenativeweb: _TheNativeWeb["default"],
  wolkenkit: _Wolkenkit["default"]
};
exports["default"] = _default;