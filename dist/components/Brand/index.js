"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logos = _interopRequireDefault(require("./logos"));

var _MadeBy = _interopRequireDefault(require("./MadeBy"));

var _Pattern = _interopRequireDefault(require("./Pattern"));

var _PoweredBy = _interopRequireDefault(require("./PoweredBy"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

var styles = function styles(theme) {
  return {
    Brand: {
      width: '100%',
      height: '100%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      background: theme.color.brand.dark
    }
  };
};

var Brand = function Brand(_ref) {
  var color = _ref.color,
      classes = _ref.classes,
      size = _ref.size,
      type = _ref.type,
      isInteractive = _ref.isInteractive;
  var Logo = _logos.default[type];
  return _react.default.createElement("div", {
    className: classes.Brand
  }, _react.default.createElement(Logo, {
    color: color,
    size: size,
    isInteractive: isInteractive
  }));
};

Brand.Pattern = _Pattern.default;
Brand.MadeBy = _MadeBy.default;
Brand.PoweredBy = _PoweredBy.default;
Brand.propTypes = {
  color: _propTypes.default.oneOf(['default', 'monochrome']),
  isInteractive: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['s', 'm', 'l']),
  type: _propTypes.default.oneOf(['full', 'minimal'])
};
Brand.defaultProps = {
  size: 'm',
  type: 'full'
};

var _default = (0, _styles.withStyles)(styles)(Brand);

exports.default = _default;