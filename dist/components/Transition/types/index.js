"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Fade = _interopRequireDefault(require("./Fade"));

var _FadeInLeft = _interopRequireDefault(require("./FadeInLeft"));

var _FadeInRight = _interopRequireDefault(require("./FadeInRight"));

var _Grow = _interopRequireDefault(require("./Grow"));

var _Zoom = _interopRequireDefault(require("./Zoom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Fade: _Fade["default"],
  FadeInLeft: _FadeInLeft["default"],
  FadeInRight: _FadeInRight["default"],
  Grow: _Grow["default"],
  Zoom: _Zoom["default"]
};
exports["default"] = _default;