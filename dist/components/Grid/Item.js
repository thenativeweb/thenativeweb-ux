"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var spaceDependentProperties = {
  columnStart: function columnStart(_ref) {
    var spaceFactor = _ref.spaceFactor;
    return {
      gridColumnStart: spaceFactor
    };
  },
  columnEnd: function columnEnd(_ref2) {
    var spaceFactor = _ref2.spaceFactor;
    return {
      gridColumnEnd: spaceFactor
    };
  },
  columnSpan: function columnSpan(_ref3) {
    var spaceFactor = _ref3.spaceFactor;
    return {
      gridColumnEnd: "span ".concat(spaceFactor)
    };
  }
};

var styles = function styles(theme) {
  var _objectSpread2;

  return _objectSpread({
    Item: {}
  }, (0, _utils.createSpaceDependentClasses)({
    theme: theme,
    definitions: spaceDependentProperties
  }), (0, _utils.createDefaultSpaceDependantClasses)({
    theme: theme,
    definitions: spaceDependentProperties
  }), (_objectSpread2 = {}, _defineProperty(_objectSpread2, theme.breakpoints.only('xs'), {
    Item: {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto'
    }
  }), _defineProperty(_objectSpread2, theme.breakpoints.up('sm'), _objectSpread({}, (0, _utils.createSpaceDependentClasses)({
    deviceSize: 'sm',
    theme: theme,
    definitions: spaceDependentProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('md'), _objectSpread({}, (0, _utils.createSpaceDependentClasses)({
    deviceSize: 'md',
    theme: theme,
    definitions: spaceDependentProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('lg'), _objectSpread({}, (0, _utils.createSpaceDependentClasses)({
    deviceSize: 'lg',
    theme: theme,
    definitions: spaceDependentProperties
  }))), _defineProperty(_objectSpread2, theme.breakpoints.up('xl'), _objectSpread({}, (0, _utils.createSpaceDependentClasses)({
    deviceSize: 'xl',
    theme: theme,
    definitions: spaceDependentProperties
  }))), _objectSpread2));
};

var Item = _react["default"].memo(function () {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$component = _ref4.component,
      component = _ref4$component === void 0 ? 'div' : _ref4$component,
      classes = _ref4.classes,
      className = _ref4.className,
      children = _ref4.children,
      id = _ref4.id,
      style = _ref4.style,
      props = _objectWithoutProperties(_ref4, ["component", "classes", "className", "children", "id", "style"]);

  var spaceDependentClassNames = (0, _utils.getSpaceDependentClassNamesFromProps)({
    props: props,
    classes: classes,
    definitions: spaceDependentProperties
  });
  var componentClasses = (0, _styles.classNames)(classes.Item, spaceDependentClassNames, className);
  return _react["default"].createElement(component, {
    className: componentClasses,
    id: id,
    style: style
  }, children);
});

Item.propTypes = {
  columnEnd: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  columnSpan: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  columnStart: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object])
};
Item.displayName = 'GridItem';

var _default = (0, _styles.withStyles)(styles)(Item);

exports["default"] = _default;