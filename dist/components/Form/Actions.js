'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Actions: {
      display: 'flex',
      'justify-content': 'flex-end',
      'border-top': '1px solid ' + theme.color.content.border,
      'padding-top': theme.grid.stepSize,
      'margin-top': theme.grid.stepSize * 2
    }
  };
};

var Actions = function Actions(_ref) {
  var children = _ref.children,
      classes = _ref.classes;

  return _react2.default.createElement(
    'div',
    { className: classes.Actions },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Actions);