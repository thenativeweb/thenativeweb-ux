'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Application = require('../components/Application');

var _Application2 = _interopRequireDefault(_Application);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeProvider = require('../components/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _thenativeweb = require('../themes/thenativeweb');

var _thenativeweb2 = _interopRequireDefault(_thenativeweb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirstRender = true;

exports.default = function (props) {
  var Services = isFirstRender ? _Application2.default.Services : _react2.default.Fragment;

  isFirstRender = false;

  return _react2.default.createElement(
    _ThemeProvider2.default,
    { theme: _thenativeweb2.default },
    _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(Services, null),
      props.children
    )
  );
};