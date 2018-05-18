'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      onChange = _ref.onChange;

  var componentClasses = (0, _classnames2.default)(classes.CheckBox, className);

  return _react2.default.createElement('input', {
    id: id,
    className: componentClasses,
    name: name,
    type: 'checkbox',
    checked: checked,
    onChange: onChange
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

CheckBox.defaultProps = {
  onChange: function onChange() {}
};

exports.default = (0, _reactJss2.default)(styles)(CheckBox);