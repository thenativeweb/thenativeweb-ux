'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _thenativeweb = require('./thenativeweb');

var _thenativeweb2 = _interopRequireDefault(_thenativeweb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _merge2.default)({}, _thenativeweb2.default, {
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

exports.default = theme;