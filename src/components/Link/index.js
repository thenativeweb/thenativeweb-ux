import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
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
});

const Link = ({ classes, id, className, children, isExternal, href, onClick }) => {
  const brandClassNames = classNames(classes.Link, className);

  if (isExternal === true) {
    return (
      <a id={ id } className={ brandClassNames } href={ href } onClick={ onClick } rel='noopener noreferrer' target='_blank'>
        { children }
      </a>
    );
  }

  return (
    <a id={ id } className={ brandClassNames } href={ href } onClick={ onClick }>
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
  onClick () {
    // Intentionally left blank
  }
};

export default withStyles(styles)(Link);
