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
    Text: {
      display: 'block',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      color: 'inherit',
      'font-family': theme.font.family["default"]
    },
    AdjustAuto: {},
    AdjustFlex: {
      'flex-grow': 1,
      'flex-shrink': 1
    },
    SizeM: {
      padding: '7px 0',
      'font-size': theme.font.size["default"]
    },
    SizeS: {
      padding: '7px 0',
      'font-size': theme.font.size.small
    },
    BreakLines: {
      'white-space': 'normal'
    }
  };
};

var Text = function Text(_ref) {
  var _classNames;

  var adjust = _ref.adjust,
      breakLines = _ref.breakLines,
      classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      size = _ref.size,
      style = _ref.style;
  var componentClasses = (0, _styles.classNames)(classes.Text, (_classNames = {}, _defineProperty(_classNames, classes.BreakLines, breakLines), _defineProperty(_classNames, classes.AdjustFlex, adjust === 'flex'), _defineProperty(_classNames, classes.AdjustAuto, adjust === 'auto'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _classNames), className);
  return _react["default"].createElement("div", {
    id: id,
    className: componentClasses,
    style: style
  }, children);
};

Text.propTypes = {
  adjust: _propTypes["default"].oneOf(['flex', 'auto']),
  breakLines: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['s', 'm'])
};
Text.defaultProps = {
  adjust: 'auto',
  breakLines: false,
  size: 'm'
};

var _default = (0, _styles.withStyles)(styles)(Text);

exports["default"] = _default;