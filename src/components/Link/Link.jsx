import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  Link: {
    color: theme.color.brand.highlight,
    'text-decoration': 'none',
    'font-weight': 400,
    'font-family': theme.font.family.default,
    'font-size': theme.font.size.default,

    '&:hover': {
      'text-decoration': 'none'
    }
  }
});

const Link = ({ classes, className, children, isExternal, href, onClick }) => {
  const brandClassNames = classNames(classes.Link, className);

  if (isExternal === true) {
    return (
      <a className={ brandClassNames } href={ href } onClick={ onClick } rel='noopener noreferrer' target='_blank'>
        { children }
      </a>
    );
  }

  return (
    <a className={ brandClassNames } href={ href } onClick={ onClick }>
      { children }
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  onClick: PropTypes.func
};

Link.defaultProps = {
  isExternal: false,
  onClick () {}
};

export default injectSheet(styles)(Link);
