"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logos = _interopRequireDefault(require("./logos"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _defineProperty({
    Product: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.font.family.headline,
      fontWeight: 500
    },
    IsCollapsed: {
      '& *': {
        animation: 'none'
      }
    },
    'CompositeName, Name': {
      textAlign: 'center',
      marginTop: '3px'
    },
    Name: {
      color: theme.color.brand.white
    },
    CompositeName: {
      color: theme.color.brand.highlight,
      '& span': {
        color: theme.color.brand.white
      }
    },
    SizeMd: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.sm
      }
    },
    SizeLg: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.lg
      }
    },
    SizeXl: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.xl
      }
    },
    TypeLogoOnly: {},
    TypeTypoOnly: {
      '& $Name, & $CompositeName': {
        marginTop: 0
      }
    }
  }, theme.breakpoints.down('sm'), {
    Name: {},
    CompositeName: {},
    SizeLg: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.md
      }
    },
    SizeXl: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.lg
      }
    }
  });
};

var Product = function Product(_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      isAnimated = _ref2.isAnimated,
      name = _ref2.name,
      size = _ref2.size,
      theme = _ref2.theme,
      type = _ref2.type;
  var brandClassNames = (0, _styles.classNames)(classes.Product, (_classNames = {}, _defineProperty(_classNames, classes.SizeMd, size === 'md'), _defineProperty(_classNames, classes.SizeLg, size === 'lg'), _defineProperty(_classNames, classes.SizeXl, size === 'xl'), _defineProperty(_classNames, classes.TypeLogoOnly, type === 'logo-only'), _defineProperty(_classNames, classes.TypeTypoOnly, type === 'typo-only'), _classNames));

  var nameComponent = _react["default"].createElement("div", {
    className: classes.Name
  }, name);

  var logoId = theme.id;

  if (name === 'wolkenkit') {
    nameComponent = _react["default"].createElement("div", {
      className: classes.CompositeName
    }, _react["default"].createElement("span", null, "wolken"), "kit");
    logoId = 'wolkenkit';
  }

  var Logo = _logos["default"][logoId] || _logos["default"].thenativeweb || null;
  return _react["default"].createElement("div", {
    className: brandClassNames
  }, type === 'typo-only' ? null : _react["default"].createElement(Logo, {
    isAnimated: isAnimated,
    size: size
  }), type === 'logo-only' ? null : nameComponent);
};

Product.propTypes = {
  name: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['md', 'lg', 'xl']),
  type: _propTypes["default"].oneOf(['default', 'typo-only', 'logo-only'])
};
Product.defaultProps = {
  size: 'md',
  name: undefined,
  type: 'default'
};

var _default = (0, _styles.withStyles)(styles)((0, _styles.withTheme)(Product));

exports["default"] = _default;