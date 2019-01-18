"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

var styles = function styles(theme) {
  return {
    Text: {
      display: 'block',
      'flex-grow': 1,
      'flex-shrink': 1,
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      color: 'inherit',
      'font-family': theme.font.family.default
    },
    SizeM: {
      padding: '7px 0',
      'font-size': theme.font.size.default
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

  var breakLines = _ref.breakLines,
      classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      size = _ref.size,
      style = _ref.style;
  var componentClasses = (0, _styles.classNames)(classes.Text, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.BreakLines, breakLines), (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), _classNames), className);
  return _react.default.createElement("div", {
    id: id,
    className: componentClasses,
    style: style
  }, children);
};

Text.propTypes = {
  breakLines: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['s', 'm'])
};
Text.defaultProps = {
  breakLines: false,
  size: 'm'
};

var _default = (0, _styles.withStyles)(styles)(Text);

exports.default = _default;