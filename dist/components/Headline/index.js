"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    Headline: {
      fontFamily: theme.font.family["default"],
      opacity: 0.95,
      padding: 0,
      margin: 0
    },
    Level1: {
      fontSize: theme.font.size.xl,
      fontWeight: 600,
      textAlign: 'center',
      borderBottom: "1px solid ".concat(theme.color.content.border),
      paddingBottom: "".concat(theme.space(2), "px"),
      marginBottom: "".concat(theme.space(2), "px")
    },
    Level2: {
      fontSize: theme.font.size.xl,
      fontWeight: 500,
      textAlign: 'left',
      borderBottom: "1px solid ".concat(theme.color.content.border),
      padding: "".concat(theme.space(2) * 2, "px 0 ").concat(theme.space(2), "px 0"),
      marginBottom: "".concat(theme.space(2), "px")
    }
  };
};

var Headline = function Headline(_ref) {
  var _classNames;

  var classes = _ref.classes,
      children = _ref.children,
      id = _ref.id,
      level = _ref.level,
      style = _ref.style;
  var componentClasses = (0, _styles.classNames)(classes.Headline, (_classNames = {}, _defineProperty(_classNames, classes.Level1, level === '1'), _defineProperty(_classNames, classes.Level2, level === '2'), _classNames));
  return _react["default"].createElement("div", {
    id: id,
    className: componentClasses,
    style: style
  }, children);
};

Headline.propTypes = {
  level: _propTypes["default"].oneOf(['1', '2'])
};
Headline.defaultProps = {
  level: '1'
};

var _default = (0, _styles.withStyles)(styles)(Headline);

exports["default"] = _default;