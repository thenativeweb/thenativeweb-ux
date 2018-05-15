import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

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
      level = _ref.level,
      children = _ref.children;

  var componentClasses = classNames(classes.Headline, (_classNames = {}, _defineProperty(_classNames, classes.Level1, level === '1'), _defineProperty(_classNames, classes.Level2, level === '2'), _classNames));

  return React.createElement(
    'div',
    { className: componentClasses },
    children
  );
};

Headline.propTypes = {
  level: PropTypes.oneOf(['1', '2'])
};

Headline.defaultProps = {
  level: '1'
};

export default injectSheet(styles)(Headline);