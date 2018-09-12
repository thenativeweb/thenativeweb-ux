"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Link = _interopRequireDefault(require("../Link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    MadeBy: {
      overflow: 'hidden',
      'font-family': theme.font.family.default,
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
      'font-size': theme.font.size.default
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
  var componentClasses = (0, _classnames.default)(classes.MadeBy, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.ColorDark, color === 'dark'), (0, _defineProperty2.default)(_classNames, classes.ColorLight, color === 'light'), (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty2.default)(_classNames, classes.SizeL, size === 'l'), _classNames));
  partner = (0, _flatten.default)([partner]);
  return _react.default.createElement("div", {
    className: componentClasses
  }, _react.default.createElement("span", {
    className: classes.Intro
  }, "Made with ", _react.default.createElement(_Icon.default, {
    name: "heart",
    color: "highlight",
    type: "inline"
  }), " by"), ' ', _react.default.createElement(_Link.default, {
    href: "https://www.thenativeweb.io",
    isExternal: true
  }, "the native web"), partner.length > 0 ? ' and ' : null, partner.map(function (item) {
    return _react.default.createElement(_Link.default, {
      key: item.name,
      href: item.href,
      isExternal: true
    }, item.name);
  }));
};

MadeBy.propTypes = {
  color: _propTypes.default.oneOf(['dark', 'light']),
  partner: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  size: _propTypes.default.oneOf(['s', 'm', 'l'])
};
MadeBy.defaultProps = {
  color: 'dark',
  size: 's',
  name: undefined
};

var _default = (0, _reactJss.default)(styles)(MadeBy);

exports.default = _default;