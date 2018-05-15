'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Full = require('./Full');

var _Full2 = _interopRequireDefault(_Full);

var _Minimal = require('./Minimal');

var _Minimal2 = _interopRequireDefault(_Minimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  full: _Full2.default,
  minimal: _Minimal2.default
};