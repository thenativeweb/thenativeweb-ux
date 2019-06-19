"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    '@keyframes loading-indicator-pulse': {
      '0%': {
        transform: 'scale(0.5)'
      },
      '20%': {
        transform: 'scale(1)'
      },
      '100%': {
        transform: 'scale(0.5)'
      }
    },
    BusyIndicator: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: '100px'
    },
    Pulse: {
      width: "".concat(theme.space(1.5), "px"),
      height: "".concat(theme.space(1.5), "px"),
      marginRight: 3,
      borderRadius: '50%',
      backgroundColor: theme.color.brand.highlight,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationName: '$loading-indicator-pulse',
      animationDuration: '900ms',
      animationFillMode: 'both'
    },
    Pulse1: {
      animationDelay: '-300ms'
    },
    Pulse2: {
      animationDelay: '-150ms'
    },
    Pulse3: {}
  };
};

var BusyIndicator = function BusyIndicator(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      isVisible = _ref.isVisible;

  if (!isVisible) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: (0, _styles.classNames)(classes.BusyIndicator, className)
  }, _react["default"].createElement("div", {
    className: (0, _styles.classNames)(classes.Pulse, classes.Pulse1)
  }), _react["default"].createElement("div", {
    className: (0, _styles.classNames)(classes.Pulse, classes.Pulse2)
  }), _react["default"].createElement("div", {
    className: (0, _styles.classNames)(classes.Pulse, classes.Pulse3)
  }));
};

BusyIndicator.propTypes = {
  isVisible: _propTypes["default"].bool
};
BusyIndicator.defaultProps = {
  isVisible: true
};

var _default = (0, _styles.withStyles)(styles)(BusyIndicator);

exports["default"] = _default;