"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TheNativeWeb = _interopRequireDefault(require("./TheNativeWeb"));

var _Wolkenkit = _interopRequireDefault(require("./Wolkenkit"));

var _default = {
  thenativeweb: _TheNativeWeb.default,
  wolkenkit: _Wolkenkit.default
};
exports.default = _default;