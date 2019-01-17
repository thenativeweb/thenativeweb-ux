"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Actions = _interopRequireDefault(require("./Actions"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Row = _interopRequireDefault(require("./Row"));

var _styles = require("../../styles");

var styles = function styles(theme) {
  return {
    Form: {
      'font-family': theme.font.family.default
    }
  };
};

var Form = function Form(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      onSubmit = _ref.onSubmit;
  var componentClasses = (0, _styles.classNames)(classes.Form, className);

  if (onSubmit) {
    return _react.default.createElement("form", {
      className: componentClasses,
      onSubmit: onSubmit
    }, children);
  }

  return _react.default.createElement("div", {
    className: componentClasses
  }, children);
};

Form.Row = _Row.default;
Form.Actions = _Actions.default;
Form.propTypes = {
  onSubmit: _propTypes.default.func
};
Form.defaultProps = {
  onSubmit: function onSubmit() {}
};

var _default = (0, _styles.withStyles)(styles)(Form);

exports.default = _default;