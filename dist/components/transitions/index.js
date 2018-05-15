'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _FadeInLeft = require('./FadeInLeft');

var _FadeInLeft2 = _interopRequireDefault(_FadeInLeft);

var _FadeInRight = require('./FadeInRight');

var _FadeInRight2 = _interopRequireDefault(_FadeInRight);

var _Zoom = require('./Zoom');

var _Zoom2 = _interopRequireDefault(_Zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Fade: _Fade2.default,
  FadeInLeft: _FadeInLeft2.default,
  FadeInRight: _FadeInRight2.default,
  Zoom: _Zoom2.default
};