"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _thenativeweb = _interopRequireDefault(require("./thenativeweb"));

var theme = (0, _merge.default)({}, _thenativeweb.default, {
  id: 'wolkenkit',
  color: {
    brand: {
      dark: '#2f333b',
      highlight: '#29abe2',
      darkGrey: '#363d45',
      midGrey: '#595c62',
      lightGrey: '#eee',
      white: '#fff'
    },
    interactionFocus: '#363d45'
  }
});
var _default = theme;
exports.default = _default;