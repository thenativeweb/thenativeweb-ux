"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var columnCount = 13,
    columns = _toConsumableArray(new Array(columnCount)).map(function (item, index) {
  return index + 1;
});

var columnProperties = {
  ColumnStart: function ColumnStart(column) {
    return {
      gridColumnStart: column
    };
  },
  ColumnEnd: function ColumnEnd(column) {
    return {
      gridColumnEnd: column + 1
    };
  },
  ColumnSpan: function ColumnSpan(column) {
    return {
      gridColumnStart: "span ".concat(column)
    };
  }
};

var createColumnClasses = function createColumnClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceSize = _ref.deviceSize,
      theme = _ref.theme;

  if (!theme) {
    throw new Error('Theme is missing.');
  }

  var classes = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var column = _step.value;

      for (var _i = 0, _Object$keys = Object.keys(columnProperties); _i < _Object$keys.length; _i++) {
        var propertyName = _Object$keys[_i];
        classes["".concat(deviceSize).concat(propertyName, "-").concat(column)] = columnProperties[propertyName](column);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return classes;
};

var styles = function styles(theme) {
  var _objectSpread2;

  return _objectSpread({
    Item: {
      width: '100%'
    }
  }, createColumnClasses({
    deviceSize: '',
    theme: theme,
    properties: columnProperties
  }), {}, createColumnClasses({
    deviceSize: 'xs',
    theme: theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }), {}, createColumnClasses({
    deviceSize: 'sm',
    theme: theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }), {}, createColumnClasses({
    deviceSize: 'md',
    theme: theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }), {}, createColumnClasses({
    deviceSize: 'lg',
    theme: theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }), {}, createColumnClasses({
    deviceSize: 'xl',
    theme: theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }), (_objectSpread2 = {}, _defineProperty(_objectSpread2, theme.breakpoints.up('xs'), _objectSpread({}, createColumnClasses({
    deviceSize: 'xs',
    theme: theme,
    properties: columnProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('sm'), _objectSpread({}, createColumnClasses({
    deviceSize: 'sm',
    theme: theme,
    properties: columnProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('md'), _objectSpread({}, createColumnClasses({
    deviceSize: 'md',
    theme: theme,
    properties: columnProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('lg'), _objectSpread({}, createColumnClasses({
    deviceSize: 'lg',
    theme: theme,
    properties: columnProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('xl'), _objectSpread({}, createColumnClasses({
    deviceSize: 'xl',
    theme: theme,
    properties: columnProperties
  }))), _objectSpread2));
};

var Item = _react["default"].memo(function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? 'div' : _ref2$component,
      classes = _ref2.classes,
      className = _ref2.className,
      children = _ref2.children,
      columnStart = _ref2.columnStart,
      columnSpan = _ref2.columnSpan,
      columnEnd = _ref2.columnEnd,
      id = _ref2.id,
      style = _ref2.style;

  var columnClasses = [];

  var typeOfColumnStart = _typeof(columnStart);

  var typeOfColumnEnd = _typeof(columnEnd);

  var typeOfColumnSpan = _typeof(columnSpan);

  switch (typeOfColumnStart) {
    case 'string':
    case 'number':
      columnClasses.push(classes["ColumnStart-".concat(columnStart)]);
      break;

    case 'object':
      for (var _i2 = 0, _Object$keys2 = Object.keys(columnStart); _i2 < _Object$keys2.length; _i2++) {
        var sizeId = _Object$keys2[_i2];
        columnClasses.push(classes["".concat(sizeId, "ColumnStart-").concat(columnStart[sizeId])]);
      }

      break;

    default:
      break;
  }

  switch (typeOfColumnEnd) {
    case 'string':
    case 'number':
      columnClasses.push(classes["ColumnEnd-".concat(columnEnd)]);
      break;

    case 'object':
      for (var _i3 = 0, _Object$keys3 = Object.keys(columnEnd); _i3 < _Object$keys3.length; _i3++) {
        var _sizeId = _Object$keys3[_i3];
        columnClasses.push(classes["".concat(_sizeId, "ColumnEnd-").concat(columnEnd[_sizeId])]);
      }

      break;

    default:
      break;
  }

  switch (typeOfColumnSpan) {
    case 'string':
    case 'number':
      columnClasses.push(classes["ColumnSpan-".concat(columnSpan)]);
      break;

    case 'object':
      for (var _i4 = 0, _Object$keys4 = Object.keys(columnSpan); _i4 < _Object$keys4.length; _i4++) {
        var _sizeId2 = _Object$keys4[_i4];
        columnClasses.push(classes["".concat(_sizeId2, "ColumnSpan-").concat(columnSpan[_sizeId2])]);
      }

      break;

    default:
      break;
  }

  var componentClasses = (0, _styles.classNames)(classes.Item, columnClasses, className);
  return _react["default"].createElement(component, {
    className: componentClasses,
    style: style,
    id: id
  }, children);
});

Item.displayName = 'GridItem';

var _default = (0, _styles.withStyles)(styles)(Item);

exports["default"] = _default;