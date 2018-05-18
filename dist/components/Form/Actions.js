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
    Actions: {
      display: 'flex',
      'border-top': '1px solid ' + theme.color.content.border,
      'padding-top': theme.grid.stepSize,
      'margin-top': theme.grid.stepSize * 2
    },

    TypeDefault: {
      'justify-content': 'flex-end'
    },

    TypeStacked: {
      'flex-direction': 'column',
      'justify-content': 'stretch',
      'margin-bottom': theme.grid.stepSize * 2,

      '& > *': {
        'margin-right': 0,
        'margin-bottom': 0
      }
    }
  };
};

var Actions = function Actions(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      type = _ref.type;

  var componentClasses = (0, _classnames2.default)(classes.Actions, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.TypeDefault, type === 'default'), (0, _defineProperty3.default)(_classNames, classes.TypeStacked, type === 'stacked'), _classNames), className);

  return _react2.default.createElement(
    'div',
    { className: componentClasses },
    children
  );
};

Actions.propTypes = {
  type: _propTypes2.default.oneOf(['default', 'stacked'])
};

Actions.defaultProps = {
  type: 'default'
};

exports.default = (0, _reactJss2.default)(styles)(Actions);