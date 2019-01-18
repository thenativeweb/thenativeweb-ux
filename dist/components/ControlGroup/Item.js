"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _CheckBox = _interopRequireDefault(require("../CheckBox"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

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
      adjust = _ref$adjust === void 0 ? 'flex' : _ref$adjust,
      children = _ref.children,
      helpLink = _ref.helpLink,
      label = _ref.label,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === void 0 ? true : _ref$isVisible;
  var type = 'default';

  var child = _react.default.Children.only(children);

  if (child.type === _CheckBox.default) {
    type = 'checkbox';
  }

  var componentClasses = (0, _styles.classNames)(classes.Item, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty2.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty2.default)(_classNames, classes.Hidden, isVisible === false), (0, _defineProperty2.default)(_classNames, classes.Labeled, label), (0, _defineProperty2.default)(_classNames, classes.TypeCheckBox, type === 'checkbox'), _classNames), className);

  if (type === 'checkbox') {
    var controlId = child.props.id ? child.props.id : undefined;
    return _react.default.createElement("div", {
      className: componentClasses
    }, _react.default.createElement("div", {
      className: classes.Label
    }, _react.default.createElement("div", {
      className: classes.Control
    }, child), label ? _react.default.createElement("label", {
      htmlFor: controlId
    }, label) : null, helpLink ? _react.default.createElement("a", {
      className: classes.Help,
      title: "Get more detailed information\u2026",
      rel: "noopener noreferrer",
      target: "_blank",
      href: helpLink
    }, _react.default.createElement(_Icon.default, {
      name: "help",
      className: styles.IconHelp
    })) : null));
  }

  return _react.default.createElement("div", {
    className: componentClasses
  }, _react.default.createElement("div", {
    className: classes.Label
  }, label ? _react.default.createElement("label", null, label) : null, helpLink ? _react.default.createElement("a", {
    className: classes.Help,
    rel: "noopener noreferrer",
    target: "_blank",
    href: helpLink
  }, _react.default.createElement(_Icon.default, {
    name: "help",
    className: styles.IconHelp
  })) : null), _react.default.createElement("div", {
    className: classes.Control
  }, child));
};

var _default = (0, _styles.withStyles)(styles)(Item);

exports.default = _default;