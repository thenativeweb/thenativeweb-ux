"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

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
      'justify-content': 'flex-start',
      'align-items': 'center',
      'min-height': 100
    },
    Pulse: {
      width: 12,
      height: 12,
      marginRight: 3,
      'border-radius': '50%',
      'background-color': theme.color.brand.highlight,
      'animation-iteration-count': 'infinite',
      'animation-timing-function': 'linear',
      'animation-name': 'loading-indicator-pulse',
      'animation-duration': '900ms',
      'animation-fill-mode': 'both'
    },
    Pulse1: {
      'animation-delay': '-300ms'
    },
    Pulse2: {
      'animation-delay': '-150ms'
    }
  };
};

var BusyIndicator = function BusyIndicator(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      isVisible = _ref.isVisible;

  if (!isVisible) {
    return null;
  }

  return _react.default.createElement("div", {
    className: (0, _styles.classNames)(classes.BusyIndicator, className)
  }, _react.default.createElement("div", {
    className: (0, _styles.classNames)(classes.Pulse, classes.Pulse1)
  }), _react.default.createElement("div", {
    className: (0, _styles.classNames)(classes.Pulse, classes.Pulse2)
  }), _react.default.createElement("div", {
    className: (0, _styles.classNames)(classes.Pulse, classes.Pulse3)
  }));
};

BusyIndicator.propTypes = {
  isVisible: _propTypes.default.bool
};
BusyIndicator.defaultProps = {
  isVisible: true
};

var _default = (0, _styles.withStyles)(styles)(BusyIndicator);

exports.default = _default;