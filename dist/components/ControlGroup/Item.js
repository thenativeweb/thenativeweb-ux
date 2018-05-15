import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import React from 'react';

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
      isVisible = _ref$isVisible === undefined ? true : _ref$isVisible,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type;

  var componentClasses = classNames(classes.Item, (_classNames = {}, _defineProperty(_classNames, classes.AdjustFlex, adjust === 'flex'), _defineProperty(_classNames, classes.AdjustAuto, adjust === 'auto'), _defineProperty(_classNames, classes.Hidden, isVisible === false), _defineProperty(_classNames, classes.Labeled, label), _defineProperty(_classNames, classes.TypeCheckbox, type === 'checkbox'), _classNames), className);

  if (type === 'checkbox') {
    var controlId = children || children.props.id ? children.props.id : undefined;

    return React.createElement(
      'div',
      {
        className: componentClasses
      },
      React.createElement(
        'div',
        { className: classes.Label },
        React.createElement(
          'div',
          { className: classes.Control },
          children
        ),
        label ? React.createElement(
          'label',
          { htmlFor: controlId },
          label
        ) : null,
        helpLink ? React.createElement(
          'a',
          { className: classes.Help, title: 'Get more detailed information\u2026', rel: 'noopener noreferrer', target: '_blank', href: helpLink },
          React.createElement(Icon, { name: 'help', className: styles.IconHelp })
        ) : null
      )
    );
  }

  return React.createElement(
    'div',
    {
      className: componentClasses
    },
    React.createElement(
      'div',
      { className: classes.Label },
      label ? React.createElement(
        'label',
        null,
        label
      ) : null,
      helpLink ? React.createElement(
        'a',
        { className: classes.Help, rel: 'noopener noreferrer', target: '_blank', href: helpLink },
        React.createElement(Icon, { name: 'help', className: styles.IconHelp })
      ) : null
    ),
    React.createElement(
      'div',
      { className: classes.Control },
      children
    )
  );
};

export default injectSheet(styles)(Item);