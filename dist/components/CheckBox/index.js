"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

var styles = function styles(theme) {
  return {
    CheckBox: {
      'font-family': theme.font.family.default
    }
  };
};

var CheckBox = function CheckBox(_ref) {
  var checked = _ref.checked,
      classes = _ref.classes,
      className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      style = _ref.style,
      onChange = _ref.onChange;
  var componentClasses = (0, _styles.classNames)(classes.CheckBox, className);
  return _react.default.createElement("input", {
    id: id,
    className: componentClasses,
    name: name,
    style: style,
    type: "checkbox",
    checked: checked,
    onChange: onChange
  });
};

CheckBox.propTypes = {
  checked: _propTypes.default.bool,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func
};
CheckBox.defaultProps = {
  onChange: function onChange() {}
};

var _default = (0, _styles.withStyles)(styles)(CheckBox);

exports.default = _default;