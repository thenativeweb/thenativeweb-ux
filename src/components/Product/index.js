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
    'font-weight': 500
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

  SizeM: {
    '& $Name, & $CompositeName': {
      'font-size': theme.font.size.small
    }
  },

  SizeL: {
    '& $Name, & $CompositeName': {
      'font-size': theme.font.size.large
    }
  },

  SizeXL: {
    '& $Name, & $CompositeName': {
      'font-size': theme.font.size.xlarge
    }
  },

  TypeLogoOnly: {},

  TypeTypoOnly: {
    '& $Name, & $CompositeName': {
      'margin-top': 0
    }
  },

  [theme.device.medium]: {
    Name: {},
    CompositeName: {},

    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.large
      }
    }
  },

  [theme.device.small]: {
    Name: {},
    CompositeName: {},

    SizeL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.default
      }
    },

    SizeXL: {
      '& $Name, & $CompositeName': {
        'font-size': theme.font.size.large
      }
    }
  }
});

const Product = ({ classes, isAnimated, name, size, theme, type }) => {
  const brandClassNames = classNames(classes.Product, {
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l',
    [classes.SizeXL]: size === 'xl',
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
  size: PropTypes.oneOf([ 'm', 'l', 'xl' ]),
  type: PropTypes.oneOf([ 'default', 'typo-only', 'logo-only' ])
};

Product.defaultProps = {
  size: 'm',
  name: undefined,
  type: 'default'
};

export default injectSheet(styles)(Product);
