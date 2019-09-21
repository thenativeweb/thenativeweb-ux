import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Link: {
    color: theme.color.brand.highlight,
    textDecoration: 'none',
    fontWeight: 400,
    fontFamily: theme.font.family.default,
    fontSize: 'inherit',

    '&:hover': {
      textDecoration: 'none'
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
