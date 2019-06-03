"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _thenativeweb = _interopRequireDefault(require("./thenativeweb"));

var _wolkenkit = _interopRequireDefault(require("./wolkenkit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var extend = function extend(themeName) {
  var customProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!themeName) {
    throw new Error('Theme name is missing.');
  }

  var baseTheme;

  switch (themeName) {
    case 'thenativeweb':
      baseTheme = _thenativeweb["default"];
      break;

    case 'wolkenkit':
      baseTheme = _wolkenkit["default"];
      break;

    default:
      throw new Error('Unkown base theme.');
  }

  var customTheme = (0, _merge["default"])({}, baseTheme, customProperties);
  return customTheme;
};

var _default = extend;
exports["default"] = _default;