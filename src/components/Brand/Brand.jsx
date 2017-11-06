import classNames from 'classnames';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Brand = ({ isCollapsed, showLogo, suffix, size }) => {
  const brandClassNames = classNames(styles.Brand, {
    [styles.Collapsed]: isCollapsed,
    [styles.SizeS]: size === 's',
    [styles.SizeL]: size === 'l'
  });

  return (
    <div className={ brandClassNames } role='presentational'>
      <Logo isVisible={ showLogo } size={ size } />
      <div className={ styles.Suffix }>{ suffix }</div>
    </div>
  );
};

Brand.propTypes = {
  showLogo: PropTypes.bool,
  size: PropTypes.oneOf([ 's', 'l' ]),
  /** A suffix that will be added below the logo. */
  suffix: PropTypes.string
};

Brand.defaultProps = {
  showLogo: true,
  size: 'l',
  suffix: undefined
};

export default Brand;
