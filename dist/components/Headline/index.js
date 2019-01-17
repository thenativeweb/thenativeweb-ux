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
    Headline: {
      'font-family': theme.font.family.default,
      opacity: 0.95,
      padding: 0,
      margin: 0
    },
    Level1: {
      'font-size': theme.font.size.xlarge,
      'font-weight': 600,
      'text-align': 'center',
      'border-bottom': "1px solid ".concat(theme.color.content.border),
      'padding-bottom': theme.grid.stepSize * 2,
      'margin-bottom': theme.grid.stepSize * 2
    },
    Level2: {
      'font-size': theme.font.size.xlarge,
      'font-weight': 500,
      'text-align': 'left',
      'border-bottom': "1px solid ".concat(theme.color.content.border),
      padding: "".concat(theme.grid.stepSize * 2, " 0 ").concat(theme.grid.stepSize, " 0"),
      'margin-bottom': theme.grid.stepSize * 2
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
  var componentClasses = (0, _styles.classNames)(classes.Headline, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.Level1, level === '1'), (0, _defineProperty2.default)(_classNames, classes.Level2, level === '2'), _classNames));
  return _react.default.createElement("div", {
    id: id,
    className: componentClasses,
    style: style
  }, children);
};

Headline.propTypes = {
  level: _propTypes.default.oneOf(['1', '2'])
};
Headline.defaultProps = {
  level: '1'
};

var _default = (0, _styles.withStyles)(styles)(Headline);

exports.default = _default;