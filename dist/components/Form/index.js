'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var componentClasses = (0, _classnames2.default)(classes.Form, className);

  if (onSubmit) {
    return _react2.default.createElement(
      'form',
      { className: componentClasses, onSubmit: onSubmit },
      children
    );
  }

  return _react2.default.createElement(
    'div',
    { className: componentClasses },
    children
  );
};

Form.Row = _Row2.default;
Form.Actions = _Actions2.default;

Form.propTypes = {
  onSubmit: _propTypes2.default.func
};

Form.defaultProps = {
  onSubmit: function onSubmit() {}
};

exports.default = (0, _reactJss2.default)(styles)(Form);