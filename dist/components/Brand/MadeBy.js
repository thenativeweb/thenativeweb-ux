import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import flatten from 'lodash/flatten';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import Link from '../Link';
import PropTypes from 'prop-types';
import React from 'react';

var styles = function styles(theme) {
  return {
    MadeBy: {
      overflow: 'hidden',
      'font-family': theme.font.family.default,
      'font-size': theme.font.size.small,
      'text-align': 'center',
      'padding-top': theme.grid.stepSize / 2,
      'padding-bottom': theme.grid.stepSize / 2,
      color: theme.color.brand.lightGrey,
      background: theme.color.brand.dark
    },

    SizeL: {},
    SizeM: {}
  };
};

var MadeBy = function MadeBy(_ref) {
  var _classNames;

  var classes = _ref.classes,
      _ref$partner = _ref.partner,
      partner = _ref$partner === undefined ? [] : _ref$partner,
      size = _ref.size;

  var componentClasses = classNames(classes.MadeBy, (_classNames = {}, _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _classNames));

  partner = flatten([partner]);

  return React.createElement(
    'div',
    { className: componentClasses },
    React.createElement(
      'span',
      { className: classes.Intro },
      'Made with ',
      React.createElement(Icon, { name: 'heart', color: 'highlight', type: 'inline' }),
      ' by'
    ),
    ' ',
    React.createElement(
      Link,
      { href: 'https://www.thenativeweb.io', isExternal: true },
      'the native web'
    ),
    partner.length > 0 ? ' & ' : null,
    partner.map(function (item) {
      return React.createElement(
        Link,
        { key: item.name, href: item.href, isExternal: true },
        item.name
      );
    })
  );
};

MadeBy.propTypes = {
  partner: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  size: PropTypes.oneOf(['m', 'l'])
};

MadeBy.defaultProps = {
  size: 'm',
  name: undefined
};

export default injectSheet(styles)(MadeBy);