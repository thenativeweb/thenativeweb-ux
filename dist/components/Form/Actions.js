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
    Actions: {
      display: 'flex',
      borderTop: "1px solid ".concat(theme.color.content.border),
      paddingTop: "".concat(theme.space(1), "px"),
      marginTop: "".concat(theme.space(2), "px")
    },
    TypeDefault: {
      justifyContent: 'flex-end'
    },
    TypeStacked: {
      flexDirection: 'column',
      justifyContent: 'stretch',
      marginBottom: "".concat(theme.space(2), "px"),
      '& > *': {
        marginRight: 0,
        marginBottom: 0
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
  var componentClasses = (0, _styles.classNames)(classes.Actions, (_classNames = {}, _defineProperty(_classNames, classes.TypeDefault, type === 'default'), _defineProperty(_classNames, classes.TypeStacked, type === 'stacked'), _classNames), className);
  return _react["default"].createElement("div", {
    className: componentClasses
  }, children);
};

Actions.propTypes = {
  type: _propTypes["default"].oneOf(['default', 'stacked'])
};
Actions.defaultProps = {
  type: 'default'
};

var _default = (0, _styles.withStyles)(styles)(Actions);

exports["default"] = _default;