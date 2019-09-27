import Theme from '../../../themes/Theme';
import { Classes, Styles } from 'jss';
import { classNames, useTheme, withStyles } from '../../../styles';
import { LogoTheNativeWeb, LogoWolkenkit } from './logos';
import React, { FunctionComponent, ReactElement } from 'react';

const styles = (theme: Theme): Styles => ({
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

  TypeTextOnly: {
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

interface ProductProps {
  classes: Classes;
  name?: string;
  isAnimated?: boolean;
  size?: 'md' | 'lg' | 'xl';
  type?: 'default' | 'text-only' | 'logo-only';
}

const Product: FunctionComponent<ProductProps> = ({ classes, isAnimated, name, size, type }): ReactElement => {
  const theme = useTheme();

  const brandClassNames = classNames(classes.Product, {
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg',
    [classes.SizeXl]: size === 'xl',
    [classes.TypeLogoOnly]: type === 'logo-only',
    [classes.TypeTextOnly]: type === 'text-only'
  });

  let nameComponent = <div className={ classes.Name }>{ name }</div>;
  let Logo = LogoTheNativeWeb;

  if (theme.name === 'wolkenkit') {
    nameComponent = <div className={ classes.CompositeName }><span>wolken</span>kit</div>;
    Logo = LogoWolkenkit;
  }

  return (
    <div className={ brandClassNames }>
      { type === 'text-only' ? null : <Logo isAnimated={ isAnimated } size={ size } /> }
      { type === 'logo-only' ? null : nameComponent }
    </div>
  );
};

export default withStyles(styles)(Product);
