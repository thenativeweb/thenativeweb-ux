'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Item: {
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'flex-end'
    },

    '&:last-child': {
      'margin-right': 0
    },

    AdjustFlex: {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': '100%'
    },

    AdjustAuto: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto'
    },

    Labeled: {
      'margin-right': '10px'
    },

    Label: {
      'margin-bottom': '6px',
      color: theme.color.brand.dark,
      'font-weight': 400,
      display: 'flex',

      '& label': {
        'flex-grow': 1,
        'flex-shrink': 1
      },

      '& a': {
        display: 'flex',
        'flex-grow': 0,
        'flex-shrink': 0,
        'flex-basis': 'auto',
        'align-items': 'center',
        'justify-content': 'center',
        opacity: 0.75
      },

      opacity: 1
    },

    Control: {},

    TypeCheckBox: {
      '& $Control': {
        'padding-right': '6px'
      }
    }
  };
};

var Item = function Item(_ref) {
  var _classNames;

  var className = _ref.className,
      classes = _ref.classes,
      _ref$adjust = _ref.adjust,
      adjust = _ref$adjust === undefined ? 'flex' : _ref$adjust,
      children = _ref.children,
      helpLink = _ref.helpLink,
      label = _ref.label,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === undefined ? true : _ref$isVisible;

  var type = 'default';
  var child = _react2.default.Children.only(children);

  if (child.type === _CheckBox2.default) {
    type = 'checkbox';
  }

  var componentClasses = (0, _classnames2.default)(classes.Item, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty3.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty3.default)(_classNames, classes.Hidden, isVisible === false), (0, _defineProperty3.default)(_classNames, classes.Labeled, label), (0, _defineProperty3.default)(_classNames, classes.TypeCheckBox, type === 'checkbox'), _classNames), className);

  if (type === 'checkbox') {
    var controlId = child.props.id ? child.props.id : undefined;

    return _react2.default.createElement(
      'div',
      {
        className: componentClasses
      },
      _react2.default.createElement(
        'div',
        { className: classes.Label },
        _react2.default.createElement(
          'div',
          { className: classes.Control },
          child
        ),
        label ? _react2.default.createElement(
          'label',
          { htmlFor: controlId },
          label
        ) : null,
        helpLink ? _react2.default.createElement(
          'a',
          { className: classes.Help, title: 'Get more detailed information\u2026', rel: 'noopener noreferrer', target: '_blank', href: helpLink },
          _react2.default.createElement(_Icon2.default, { name: 'help', className: styles.IconHelp })
        ) : null
      )
    );
  }

  return _react2.default.createElement(
    'div',
    {
      className: componentClasses
    },
    _react2.default.createElement(
      'div',
      { className: classes.Label },
      label ? _react2.default.createElement(
        'label',
        null,
        label
      ) : null,
      helpLink ? _react2.default.createElement(
        'a',
        { className: classes.Help, rel: 'noopener noreferrer', target: '_blank', href: helpLink },
        _react2.default.createElement(_Icon2.default, { name: 'help', className: styles.IconHelp })
      ) : null
    ),
    _react2.default.createElement(
      'div',
      { className: classes.Control },
      child
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Item);