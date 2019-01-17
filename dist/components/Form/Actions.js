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
    Actions: {
      display: 'flex',
      'border-top': "1px solid ".concat(theme.color.content.border),
      'padding-top': theme.grid.stepSize,
      'margin-top': theme.grid.stepSize * 2
    },
    TypeDefault: {
      'justify-content': 'flex-end'
    },
    TypeStacked: {
      'flex-direction': 'column',
      'justify-content': 'stretch',
      'margin-bottom': theme.grid.stepSize * 2,
      '& > *': {
        'margin-right': 0,
        'margin-bottom': 0
      }
    }
  };
};

var Actions = function Actions(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      type = _ref.type;
  var componentClasses = (0, _styles.classNames)(classes.Actions, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.TypeDefault, type === 'default'), (0, _defineProperty2.default)(_classNames, classes.TypeStacked, type === 'stacked'), _classNames), className);
  return _react.default.createElement("div", {
    className: componentClasses
  }, children);
};

Actions.propTypes = {
  type: _propTypes.default.oneOf(['default', 'stacked'])
};
Actions.defaultProps = {
  type: 'default'
};

var _default = (0, _styles.withStyles)(styles)(Actions);

exports.default = _default;