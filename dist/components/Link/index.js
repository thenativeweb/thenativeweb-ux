"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    Link: {
      color: theme.color.brand.highlight,
      'text-decoration': 'none',
      'font-weight': 400,
      'font-family': theme.font.family.default,
      'font-size': 'inherit',
      '&:hover': {
        'text-decoration': 'none'
      }
    }
  };
};

var Link = function Link(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      isExternal = _ref.isExternal,
      href = _ref.href,
      onClick = _ref.onClick;
  var brandClassNames = (0, _classnames.default)(classes.Link, className);

  if (isExternal === true) {
    return _react.default.createElement("a", {
      className: brandClassNames,
      href: href,
      onClick: onClick,
      rel: "noopener noreferrer",
      target: "_blank"
    }, children);
  }

  return _react.default.createElement("a", {
    className: brandClassNames,
    href: href,
    onClick: onClick
  }, children);
};

Link.propTypes = {
  href: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
Link.defaultProps = {
  isExternal: false,
  onClick: function onClick() {}
};

var _default = (0, _reactJss.default)(styles)(Link);

exports.default = _default;