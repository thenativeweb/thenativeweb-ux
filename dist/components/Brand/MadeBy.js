"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _Link = _interopRequireDefault(require("../Link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    MadeBy: {
      overflow: 'hidden',
      'font-family': theme.font.family["default"],
      'text-align': 'center',
      'padding-top': theme.grid.stepSize / 2,
      'padding-bottom': theme.grid.stepSize / 2
    },
    ColorDark: {
      color: theme.color.brand.lightGrey
    },
    ColorLight: {
      color: theme.color.brand.dark
    },
    SizeS: {
      'font-size': theme.font.size.small
    },
    SizeM: {
      'font-size': theme.font.size["default"]
    },
    SizeL: {
      'font-size': theme.font.size.large
    }
  };
};

var MadeBy = function MadeBy(_ref) {
  var _classNames;

  var classes = _ref.classes,
      color = _ref.color,
      _ref$partner = _ref.partner,
      partner = _ref$partner === void 0 ? [] : _ref$partner,
      size = _ref.size;
  var componentClasses = (0, _styles.classNames)(classes.MadeBy, (_classNames = {}, _defineProperty(_classNames, classes.ColorDark, color === 'dark'), _defineProperty(_classNames, classes.ColorLight, color === 'light'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _classNames));
  var partners = Array.isArray(partner) ? partner : [partner];
  return _react["default"].createElement("div", {
    className: componentClasses
  }, _react["default"].createElement("span", {
    className: classes.Intro
  }, "Made with ", _react["default"].createElement(_Icon["default"], {
    name: "heart",
    color: "highlight",
    type: "inline"
  }), " by"), ' ', _react["default"].createElement(_Link["default"], {
    href: "https://www.thenativeweb.io",
    isExternal: true
  }, "the native web"), partners.map(function (item, index) {
    return _react["default"].createElement(_react["default"].Fragment, {
      key: item.name
    }, index === partner.length - 1 ? ' and ' : ', ', _react["default"].createElement(_Link["default"], {
      href: item.href,
      isExternal: true
    }, item.name));
  }));
};

MadeBy.propTypes = {
  color: _propTypes["default"].oneOf(['dark', 'light']),
  partner: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  size: _propTypes["default"].oneOf(['s', 'm', 'l'])
};
MadeBy.defaultProps = {
  color: 'dark',
  size: 's',
  name: undefined
};

var _default = (0, _styles.withStyles)(styles)(MadeBy);

exports["default"] = _default;