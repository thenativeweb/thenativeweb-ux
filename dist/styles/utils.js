"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpaceDependentClassNamesFromProps = exports.createSpaceDependentClasses = exports.createDefaultSpaceDependantClasses = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var createSpaceDependentClasses = function createSpaceDependentClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$deviceSize = _ref.deviceSize,
      deviceSize = _ref$deviceSize === void 0 ? '' : _ref$deviceSize,
      theme = _ref.theme,
      definitions = _ref.definitions,
      _ref$maximumSpaceFact = _ref.maximumSpaceFactor,
      maximumSpaceFactor = _ref$maximumSpaceFact === void 0 ? 16 : _ref$maximumSpaceFact;

  if (!theme) {
    throw new Error('Theme is missing.');
  }

  if (!definitions) {
    throw new Error('Definitions are missing.');
  }

  var classes = {};

  for (var spaceFactor = 0; spaceFactor < maximumSpaceFactor; spaceFactor++) {
    for (var _i = 0, _Object$keys = Object.keys(definitions); _i < _Object$keys.length; _i++) {
      var propertyName = _Object$keys[_i];
      var cssAttributes = definitions[propertyName];
      var className = "".concat(deviceSize, "-").concat(propertyName, "-").concat(spaceFactor);
      classes[className] = typeof cssAttributes === 'function' ? cssAttributes({
        spaceFactor: spaceFactor,
        theme: theme
      }) : cssAttributes;
    }
  }

  return classes;
};

exports.createSpaceDependentClasses = createSpaceDependentClasses;

var createDefaultSpaceDependantClasses = function createDefaultSpaceDependantClasses() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      theme = _ref2.theme,
      definitions = _ref2.definitions;

  if (!theme) {
    throw new Error('Theme is missing.');
  }

  if (!definitions) {
    throw new Error('Definitions are missing.');
  }

  var emptySpaceProperties = {};

  for (var _i2 = 0, _Object$keys2 = Object.keys(definitions); _i2 < _Object$keys2.length; _i2++) {
    var propertyName = _Object$keys2[_i2];
    emptySpaceProperties[propertyName] = {};
  }

  var classes = {};

  for (var _i3 = 0, _arr = ['xs', 'sm', 'md', 'lg', 'xl']; _i3 < _arr.length; _i3++) {
    var deviceSize = _arr[_i3];
    classes = (0, _merge["default"])({}, classes, createSpaceDependentClasses({
      deviceSize: deviceSize,
      theme: theme,
      definitions: emptySpaceProperties
    }));
  }

  return classes;
};

exports.createDefaultSpaceDependantClasses = createDefaultSpaceDependantClasses;

var getSpaceDependentClassNamesFromProps = function getSpaceDependentClassNamesFromProps() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      props = _ref3.props,
      classes = _ref3.classes,
      definitions = _ref3.definitions;

  if (!classes) {
    throw new Error('Classes are missing.');
  }

  if (!definitions) {
    throw new Error('Definitions are missing.');
  }

  var responsiveClassNames = [];

  for (var _i4 = 0, _Object$keys3 = Object.keys(definitions); _i4 < _Object$keys3.length; _i4++) {
    var propertyName = _Object$keys3[_i4];
    var propertyValue = props[propertyName];

    switch (_typeof(propertyValue)) {
      case 'string':
      case 'number':
        responsiveClassNames.push(classes["-".concat(propertyName, "-").concat(propertyValue)]);
        break;

      case 'object':
        for (var _i5 = 0, _Object$keys4 = Object.keys(propertyValue); _i5 < _Object$keys4.length; _i5++) {
          var sizeId = _Object$keys4[_i5];
          responsiveClassNames.push(classes["".concat(sizeId, "-").concat(propertyName, "-").concat(propertyValue[sizeId])]);
        }

        break;

      default:
        break;
    }
  }

  return responsiveClassNames;
};

exports.getSpaceDependentClassNamesFromProps = getSpaceDependentClassNamesFromProps;