"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var Icon = function Icon(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      style = _ref.style,
      type = _ref.type;
  var iconClassNames = (0, _classnames.default)(classes.Icon, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.ColorDefault, color === 'default'), (0, _defineProperty2.default)(_classNames, classes.ColorCurrent, color === 'current'), (0, _defineProperty2.default)(_classNames, classes.ColorHighlight, color === 'highlight'), (0, _defineProperty2.default)(_classNames, classes.ColorWhite, color === 'white'), (0, _defineProperty2.default)(_classNames, classes.TypeInline, type === 'inline'), (0, _defineProperty2.default)(_classNames, classes.TypeFlexAuto, type === 'flex-auto'), (0, _defineProperty2.default)(_classNames, classes.SizeXS, size === 'xs'), (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty2.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty2.default)(_classNames, classes.SizeXL, size === 'xl'), (0, _defineProperty2.default)(_classNames, classes.SizeXXL, size === 'xxl'), _classNames), className);
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: iconClassNames,
    role: "presentational",
    style: style
  }, _react.default.createElement("use", {
    xlinkHref: "#icon-".concat(name)
  }));
};

Icon.propTypes = {
  name: _propTypes.default.string.isRequired,
  color: _propTypes.default.oneOf(['default', 'current', 'highlight', 'white']),
  size: _propTypes.default.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  style: _propTypes.default.object,
  type: _propTypes.default.oneOf(['default', 'inline', 'flex-auto'])
};
Icon.defaultProps = {
  size: 's',
  color: 'default',
  type: 'default'
};

var _default = (0, _reactJss.default)(_styles.default)(Icon);

exports.default = _default;