import classNames from 'classnames';
import injectSheet from 'react-jss';
import logos from './logos';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  ProductBrand: {
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

  Suffix: {
    'text-align': 'center',
    'margin-top': '3px',
    color: theme.color.brand.white
  },

  SizeL: {
    '& $Suffix': {
      'font-size': theme.font.size.xlarge
    }
  },

  SizeM: {
    '& $Suffix': {
      'font-size': theme.font.size.medium
    }
  },

  [theme.device.medium]: {
    Suffix: {},

    SizeL: {
      '& $Suffix': {
        'font-size': theme.font.size.large
      }
    }
  }
});

const ProductBrand = ({ classes, suffix, size, theme }) => {
  const brandClassNames = classNames(classes.ProductBrand, {
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l'
  });

  const Logo = logos[theme.id] || logos.tnw || null;

  return (
    <div className={ brandClassNames } role='presentational'>
      <Logo size={ size } />
      <div className={ classes.Suffix }>{ suffix }</div>
    </div>
  );
};

ProductBrand.propTypes = {
  size: PropTypes.oneOf([ 'm', 'l' ]),
  /** A suffix that will be added below the logo. */
  suffix: PropTypes.string
};

ProductBrand.defaultProps = {
  size: 'm',
  suffix: undefined
};

export default injectSheet(styles)(ProductBrand);
