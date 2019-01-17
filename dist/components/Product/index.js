"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _logos = _interopRequireDefault(require("./logos"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

var styles = function styles(theme) {
  var _ref;

  return _ref = {
    Product: {
      display: 'flex',
      'flex-direction': 'column',
      overflow: 'hidden',
      'align-items': 'center',
      'justify-content': 'center',
      'font-family': theme.font.family.headline,
      'font-weight': 500
    },
    IsCollapsed: {
      '& *': {
        animation: 'none'
      }
    },
    Name: {
      'text-align': 'center',
      'margin-top': '3px',
      color: theme.color.brand.white
    },
    CompositeName: {
      'text-align': 'center',
      'margin-top': '3px',
      color: theme.color.brand.highlight,
      '& span': {
        color: theme.color.brand.white
      }
    },
    SizeM: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.small
      }
    },
    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.large
      }
    },
    SizeXL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.xlarge
      }
    },
    TypeLogoOnly: {},
    TypeTypoOnly: {
      '& $Name, & $CompositeName': {
        'margin-top': 0
      }
    }
  }, (0, _defineProperty2.default)(_ref, theme.device.medium, {
    Name: {},
    CompositeName: {},
    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.large
      }
    }
  }), (0, _defineProperty2.default)(_ref, theme.device.small, {
    Name: {},
    CompositeName: {},
    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.default
      }
    },
    SizeXL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.large
      }
    }
  }), _ref;
};

var Product = function Product(_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      isAnimated = _ref2.isAnimated,
      name = _ref2.name,
      size = _ref2.size,
      theme = _ref2.theme,
      type = _ref2.type;
  var brandClassNames = (0, _styles.classNames)(classes.Product, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty2.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty2.default)(_classNames, classes.SizeXL, size === 'xl'), (0, _defineProperty2.default)(_classNames, classes.TypeLogoOnly, type === 'logo-only'), (0, _defineProperty2.default)(_classNames, classes.TypeTypoOnly, type === 'typo-only'), _classNames));

  var nameComponent = _react.default.createElement("div", {
    className: classes.Name
  }, name);

  var logoId = theme.id;

  if (name === 'wolkenkit') {
    nameComponent = _react.default.createElement("div", {
      className: classes.CompositeName
    }, _react.default.createElement("span", null, "wolken"), "kit");
    logoId = 'wolkenkit';
  }

  var Logo = _logos.default[logoId] || _logos.default.thenativeweb || null;
  return _react.default.createElement("div", {
    className: brandClassNames
  }, type === 'typo-only' ? null : _react.default.createElement(Logo, {
    isAnimated: isAnimated,
    size: size
  }), type === 'logo-only' ? null : nameComponent);
};

Product.propTypes = {
  name: _propTypes.default.string,
  size: _propTypes.default.oneOf(['m', 'l', 'xl']),
  type: _propTypes.default.oneOf(['default', 'typo-only', 'logo-only'])
};
Product.defaultProps = {
  size: 'm',
  name: undefined,
  type: 'default'
};

var _default = (0, _styles.withStyles)(styles)(Product);

exports.default = _default;