import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

var styles = function styles(theme) {
  return {
    Link: {
      color: theme.color.brand.highlight,
      'text-decoration': 'none',
      'font-weight': 400,
      'font-family': theme.font.family.default,
      'font-size': 'inherit',

      '&:hover': {
        'text-decoration': 'none'
      }
    }
  };
};

var Link = function Link(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      isExternal = _ref.isExternal,
      href = _ref.href,
      onClick = _ref.onClick;

  var brandClassNames = classNames(classes.Link, className);

  if (isExternal === true) {
    return React.createElement(
      'a',
      { className: brandClassNames, href: href, onClick: onClick, rel: 'noopener noreferrer', target: '_blank' },
      children
    );
  }

  return React.createElement(
    'a',
    { className: brandClassNames, href: href, onClick: onClick },
    children
  );
};

Link.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  onClick: PropTypes.func
};

Link.defaultProps = {
  isExternal: false,
  onClick: function onClick() {}
};

export default injectSheet(styles)(Link);