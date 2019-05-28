import logos from './logos';
import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles, withTheme } from '../../styles';

const styles = theme => ({
  Product: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    fontWeight: 500
  },

  IsCollapsed: {
    '& *': {
      animation: 'none'
    }
  },

  'CompositeName, Name': {
    textAlign: 'center',
    marginTop: '3px'
  },

  Name: {
    color: theme.color.brand.white
  },

  CompositeName: {
    color: theme.color.brand.highlight,

    '& span': {
      color: theme.color.brand.white
    }
  },

  SizeMd: {
    '& $Name, & $CompositeName': {
      fontSize: theme.font.size.sm
    }
  },

  SizeLg: {
    '& $Name, & $CompositeName': {
      fontSize: theme.font.size.lg
    }
  },

  SizeXl: {
    '& $Name, & $CompositeName': {
      fontSize: theme.font.size.xl
    }
  },

  TypeLogoOnly: {},

  TypeTypoOnly: {
    '& $Name, & $CompositeName': {
      marginTop: 0
    }
  },

  [theme.breakpoints.down('sm')]: {
    Name: {},
    CompositeName: {},

    SizeLg: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.md
      }
    },

    SizeXl: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.lg
      }
    }
  }
});

const Product = ({ classes, isAnimated, name, size, theme, type }) => {
  const brandClassNames = classNames(classes.Product, {
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg',
    [classes.SizeXl]: size === 'xl',
    [classes.TypeLogoOnly]: type === 'logo-only',
    [classes.TypeTypoOnly]: type === 'typo-only'
  });

  let nameComponent = <div className={ classes.Name }>{ name }</div>;
  let logoId = theme.id;

  if (name === 'wolkenkit') {
    nameComponent = <div className={ classes.CompositeName }><span>wolken</span>kit</div>;
    logoId = 'wolkenkit';
  }

  const Logo = logos[logoId] || logos.thenativeweb || null;

  return (
    <div className={ brandClassNames }>
      { type === 'typo-only' ? null : <Logo isAnimated={ isAnimated } size={ size } /> }
      { type === 'logo-only' ? null : nameComponent }
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf([ 'md', 'lg', 'xl' ]),
  type: PropTypes.oneOf([ 'default', 'typo-only', 'logo-only' ])
};

Product.defaultProps = {
  size: 'md',
  name: undefined,
  type: 'default'
};

export default withStyles(styles)(withTheme(Product));
