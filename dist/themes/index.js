"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _thenativeweb = _interopRequireDefault(require("./thenativeweb"));

var _wolkenkit = _interopRequireDefault(require("./wolkenkit"));

var _default = {
  thenativeweb: _thenativeweb.default,
  wolkenkit: _wolkenkit.default
};
exports.default = _default;