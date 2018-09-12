"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Full = _interopRequireDefault(require("./Full"));

var _Minimal = _interopRequireDefault(require("./Minimal"));

var _default = {
  full: _Full.default,
  minimal: _Minimal.default
};
exports.default = _default;