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
    Headline: {
      'font-family': theme.font.family.default,
      opacity: 0.95,
      padding: 0,
      margin: 0
    },

    Level1: {
      'font-size': theme.font.size.xlarge,
      'font-weight': 600,
      'text-align': 'center',
      'border-bottom': '1px solid ' + theme.color.content.border,
      'padding-bottom': theme.grid.stepSize * 2,
      'margin-bottom': theme.grid.stepSize * 2
    },

    Level2: {
      'font-size': theme.font.size.xlarge,
      'font-weight': 500,
      'text-align': 'left',
      'border-bottom': '1px solid ' + theme.color.content.border,
      padding: theme.grid.stepSize * 2 + ' 0 ' + theme.grid.stepSize + ' 0',
      'margin-bottom': theme.grid.stepSize * 2
    }
  };
};

var Headline = function Headline(_ref) {
  var _classNames;

  var classes = _ref.classes,
      children = _ref.children,
      id = _ref.id,
      level = _ref.level,
      style = _ref.style;

  var componentClasses = (0, _classnames2.default)(classes.Headline, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.Level1, level === '1'), (0, _defineProperty3.default)(_classNames, classes.Level2, level === '2'), _classNames));

  return _react2.default.createElement(
    'div',
    { id: id, className: componentClasses, style: style },
    children
  );
};

Headline.propTypes = {
  level: _propTypes2.default.oneOf(['1', '2'])
};

Headline.defaultProps = {
  level: '1'
};

exports.default = (0, _reactJss2.default)(styles)(Headline);