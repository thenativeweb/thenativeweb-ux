'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Brand = require('./Brand');

var _Brand2 = _interopRequireDefault(_Brand);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Sidebar: {
      position: 'relative',
      'flex-grow': 0,
      'flex-shrink': 0,
      display: 'flex',
      'flex-direction': 'column',
      'box-sizing': 'content-box',
      width: theme.components.sidebar.width,
      background: theme.color.brand.dark,
      padding: theme.grid.stepSize * 1.5 + 'px 0'
    }
  };
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      id = _ref.id;
  return _react2.default.createElement(
    'div',
    { id: id, className: classes.Sidebar },
    children
  );
};

Sidebar.Brand = _Brand2.default;
Sidebar.Footer = _Footer2.default;
Sidebar.Item = _Item2.default;

exports.default = (0, _reactJss2.default)(styles)(Sidebar);