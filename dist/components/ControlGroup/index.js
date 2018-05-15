'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  ControlGroup: {
    display: 'flex',
    'margin-bottom': '18px'
  }
};

var ControlGroup = function ControlGroup(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      children = _ref.children,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === undefined ? true : _ref$isVisible;

  var componentClasses = (0, _classnames2.default)(classes.ControlGroup, className);

  if (!isVisible) {
    return null;
  }

  return _react2.default.createElement('div', {
    className: componentClasses,
    children: children
  });
};

ControlGroup.Divider = _Divider2.default;
ControlGroup.Item = _Item2.default;

ControlGroup.propTypes = {
  isVisible: _propTypes2.default.bool
};

exports.default = (0, _reactJss2.default)(styles)(ControlGroup);