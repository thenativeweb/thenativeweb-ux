import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import logos from './logos';
import PropTypes from 'prop-types';
import React from 'react';

var styles = function styles(theme) {
  return _defineProperty({
    Product: {
      display: 'flex',
      'flex-direction': 'column',
      overflow: 'hidden',
      'align-items': 'center',
      'justify-content': 'center',
      'font-family': theme.font.family.headline,
      background: theme.color.brand.dark
    },

    IsCollapsed: {
      '& *': {
        animation: 'none'
      }
    },

    Name: {
      'text-align': 'center',
      'margin-top': '3px',
      color: theme.color.brand.white
    },

    CompositeName: {
      'text-align': 'center',
      'margin-top': '3px',
      color: theme.color.brand.highlight,

      '& span': {
        color: theme.color.brand.white
      }
    },

    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.xlarge
      }
    },

    SizeM: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.medium
      }
    }

  }, theme.device.medium, {
    Name: {},

    SizeL: {
      '& $Name': {
        'font-size': theme.font.size.large
      }
    }
  });
};

var Product = function Product(_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      name = _ref2.name,
      size = _ref2.size,
      theme = _ref2.theme;

  var brandClassNames = classNames(classes.Product, (_classNames = {}, _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _classNames));

  var nameComponent = React.createElement(
    'div',
    { className: classes.Name },
    name
  );
  var logoId = theme.id;

  if (name === 'wolkenkit') {
    nameComponent = React.createElement(
      'div',
      { className: classes.CompositeName },
      React.createElement(
        'span',
        null,
        'wolken'
      ),
      'kit'
    );
    logoId = 'wolkenkit';
  }

  var Logo = logos[logoId] || logos.thenativeweb || null;

  return React.createElement(
    'div',
    { className: brandClassNames },
    React.createElement(Logo, { size: size }),
    nameComponent
  );
};

Product.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['m', 'l'])
};

Product.defaultProps = {
  size: 'm',
  name: undefined
};

export default injectSheet(styles)(Product);