'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sheets = new _reactJss.SheetsRegistry();

var ServerSideProvider = function ServerSideProvider(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _reactJss.JssProvider,
    { registry: sheets },
    children
  );
};

ServerSideProvider.getStyles = function () {
  return sheets.toString();
};

exports.default = ServerSideProvider;