import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Link = ({ className, children, isExternal, href, onClick }) => {
  const brandClassNames = classNames(styles.Link, {
    [styles.IsExternal]: isExternal === true
  }, className);

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

export default Link;
