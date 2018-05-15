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
    Row: {
      display: 'flex',
      'margin-bottom': theme.grid.stepSize
    }
  };
};

var Row = function Row(_ref) {
  var classes = _ref.classes,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: classes.Row },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Row);