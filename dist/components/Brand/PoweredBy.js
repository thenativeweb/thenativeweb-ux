"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Product = _interopRequireDefault(require("../Product"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    PoweredBy: {
      display: 'flex',
      'flex-direction': 'column',
      overflow: 'hidden',
      'align-items': 'center',
      'justify-content': 'center',
      'font-family': theme.font.family.default,
      'font-size': theme.font.size.small,
      'text-align': 'center',
      'padding-top': theme.grid.stepSize / 2,
      'padding-bottom': theme.grid.stepSize / 2
    },
    Intro: {
      'margin-top': theme.grid.stepSize / 2,
      'margin-bottom': theme.grid.stepSize / 2,
      color: theme.color.brand.lightGrey
    },
    SizeL: {},
    SizeM: {}
  };
};

var PoweredBy = function PoweredBy(_ref) {
  var _classNames;

  var classes = _ref.classes,
      product = _ref.product,
      size = _ref.size;
  var componentClasses = (0, _classnames.default)(classes.PoweredBy, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty2.default)(_classNames, classes.SizeL, size === 'l'), _classNames));
  return _react.default.createElement("div", {
    className: componentClasses
  }, _react.default.createElement("div", {
    className: classes.Intro
  }, "Powered by"), _react.default.createElement(_Product.default, {
    name: product,
    size: size
  }));
};

PoweredBy.propTypes = {
  product: _propTypes.default.string,
  size: _propTypes.default.oneOf(['m', 'l'])
};
PoweredBy.defaultProps = {
  size: 'm',
  name: undefined
};

var _default = (0, _reactJss.default)(styles)(PoweredBy);

exports.default = _default;