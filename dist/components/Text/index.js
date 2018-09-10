'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
    Text: {
      display: 'block',
      'flex-grow': 1,
      'flex-shrink': 1,
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      color: 'inherit',
      'font-family': theme.font.family.default
    },

    SizeM: {
      padding: '7px 0',
      'font-size': theme.font.size.default
    },

    SizeS: {
      padding: '7px 0',
      'font-size': theme.font.size.small
    },

    BreakLines: {
      'white-space': 'normal'
    }
  };
};

var Text = function Text(_ref) {
  var _classNames;

  var breakLines = _ref.breakLines,
      classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      style = _ref.style;

  var componentClasses = (0, _classnames2.default)(classes.Text, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.BreakLines, breakLines), (0, _defineProperty3.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), _classNames), className);

  return _react2.default.createElement(
    'div',
    { className: componentClasses, style: style },
    children
  );
};

Text.propTypes = {
  breakLines: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['s', 'm'])
};

Text.defaultProps = {
  breakLines: false,
  size: 'm'
};

exports.default = (0, _reactJss2.default)(styles)(Text);