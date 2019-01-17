"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../../styles");

var styles = function styles(theme) {
  return {
    Logo: {
      display: 'flex',
      'flex-direction': 'column',
      overflow: 'hidden',
      'align-items': 'center',
      'justify-content': 'center',
      'font-family': theme.font.family.headline,
      background: theme.color.brand.dark
    },
    Foreground: {
      fill: '#FFFFFF'
    },
    Background: {
      fill: '#FF0099'
    },
    IsMonochrome: {
      '& $Background': {
        fill: theme.color.brand.white
      },
      '& $Foreground': {
        fill: theme.color.brand.dark
      }
    },
    IsInteractive: {
      cursor: 'pointer',
      '&:hover': {
        '& $Background': {
          fill: '#FF0099'
        },
        '& $Foreground': {
          fill: theme.color.brand.white
        }
      }
    },
    SizeS: {
      width: '28px',
      height: '28px'
    },
    SizeM: {
      width: '42px',
      height: '42px'
    },
    SizeL: {
      width: '112px',
      height: '112px'
    }
  };
};

var Logo = function Logo(_ref) {
  var _classNames;

  var color = _ref.color,
      classes = _ref.classes,
      size = _ref.size,
      isInteractive = _ref.isInteractive;
  var componentClasses = (0, _styles.classNames)(classes.Logo, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty2.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty2.default)(_classNames, classes.IsMonochrome, color === 'monochrome'), (0, _defineProperty2.default)(_classNames, classes.IsInteractive, isInteractive), _classNames));
  return _react.default.createElement("div", {
    className: componentClasses
  }, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 112 112",
    role: "presentational"
  }, _react.default.createElement("g", null, _react.default.createElement("path", {
    className: classes.Foreground,
    d: "M99,80.9l-43.1,24.9L12.8,80.9V31.1L55.9,6.2L99,31.1V80.9z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    className: classes.Background,
    d: "M55.9,78.5c0-2.9-0.2-5.4-0.6-7.4s-1-3.7-1.9-5c-0.9-1.3-2-2.2-3.5-2.8s-3.3-0.9-5.4-0.9 c-1.6,0-3.2,0.1-5,0.3c-1.7,0.2-3,0.4-3.8,0.5v30.9l20.1,11.6l0,0L55.9,78.5L55.9,78.5z"
  }), _react.default.createElement("path", {
    className: classes.Background,
    d: "M55.9,6.2L12.8,31.1v49.8L23.3,87V54.7c2.4-0.7,5.5-1.3,9.4-2c3.9-0.6,8.1-0.9,12.8-0.9 c4.4,0,8.1,0.6,11.1,1.8s5.3,2.9,7.1,5.1c1.8,2.2,3,4.8,3.7,7.9c0.7,3.1,1.1,6.4,1.1,10.1v22L99.2,81V31.1L55.9,6.2z"
  })))));
};

Logo.propTypes = {
  color: _propTypes.default.oneOf(['default', 'monochrome']),
  isInteractive: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['s', 'm', 'l'])
};
Logo.defaultProps = {
  size: 'm',
  isInteractive: false
};

var _default = (0, _styles.withStyles)(styles)(Logo);

exports.default = _default;