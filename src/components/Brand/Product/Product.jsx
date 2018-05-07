import classNames from 'classnames';
import injectSheet from 'react-jss';
import logos from './logos';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
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
  },

  [theme.device.medium]: {
    Name: {},

    SizeL: {
      '& $Name': {
        'font-size': theme.font.size.large
      }
    }
  }
});

const Product = ({ classes, name, size, theme }) => {
  const brandClassNames = classNames(classes.Product, {
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l'
  });

  let nameComponent = <div className={ classes.Name }>{ name }</div>;
  let logoId = theme.id;

  if (name === 'wolkenkit') {
    nameComponent = <div className={ classes.CompositeName }><span>wolken</span>kit</div>;
    logoId = 'wolkenkit';
  }

  const Logo = logos[logoId] || logos.tnw || null;

  return (
    <div className={ brandClassNames }>
      <Logo size={ size } />
      { nameComponent }
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf([ 'm', 'l' ])
};

Product.defaultProps = {
  size: 'm',
  name: undefined
};

export default injectSheet(styles)(Product);
