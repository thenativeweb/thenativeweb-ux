"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("../Product"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    PoweredBy: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.font.family["default"],
      fontSize: theme.font.size.sm,
      textAlign: 'center',
      paddingTop: theme.space(0.5),
      paddingBottom: theme.space(0.5)
    },
    Intro: {
      marginTop: theme.space(1),
      marginBottom: theme.space(1),
      color: theme.color.brand.lightGrey
    },
    SizeLg: {},
    SizeMd: {}
  };
};

var PoweredBy = function PoweredBy(_ref) {
  var _classNames;

  var classes = _ref.classes,
      product = _ref.product,
      size = _ref.size;
  var componentClasses = (0, _styles.classNames)(classes.PoweredBy, (_classNames = {}, _defineProperty(_classNames, classes.SizeMd, size === 'md'), _defineProperty(_classNames, classes.SizeLg, size === 'lg'), _classNames));
  return _react["default"].createElement("div", {
    className: componentClasses
  }, _react["default"].createElement("div", {
    className: classes.Intro
  }, "Powered by"), _react["default"].createElement(_Product["default"], {
    name: product,
    size: size
  }));
};

PoweredBy.propTypes = {
  product: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['md', 'lg'])
};
PoweredBy.defaultProps = {
  size: 'md',
  name: undefined
};

var _default = (0, _styles.withStyles)(styles)(PoweredBy);

exports["default"] = _default;