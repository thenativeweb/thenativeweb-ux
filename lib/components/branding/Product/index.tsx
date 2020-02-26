import { classNames, createUseStyles, useTheme } from '../../../styles';
import { LogoTheNativeWeb, LogoWolkenkit, Theme } from '../../..';
import { ProducClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ProductProps {
  name?: string;
  isAnimated?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'default' | 'text-only' | 'logo-only';
}

const useStyles = createUseStyles<Theme, ProducClassNames>(styles);

const Product: FunctionComponent<ProductProps> = ({
  isAnimated = false,
  size = 'md',
  type = 'default',
  name
}): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();

  const brandClassNames = classNames(classes.Product, {
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg',
    [classes.SizeXl]: size === 'xl',
    [classes.TypeLogoOnly]: type === 'logo-only',
    [classes.TypeTextOnly]: type === 'text-only'
  });

  let nameComponent = <div className={ classes.Name }>{ name }</div>;
  let Logo = LogoTheNativeWeb;

  if (theme.name === 'Wolkenkit' || name === 'wolkenkit') {
    Logo = LogoWolkenkit;
  }
  if ((theme.name === 'Wolkenkit' && !name) || name === 'wolkenkit') {
    nameComponent = <div className={ classes.CompositeName }><span>wolken</span>kit</div>;
  }

  return (
    <div className={ brandClassNames }>
      { type === 'text-only' ? null : <Logo isAnimated={ isAnimated } size={ size } /> }
      { type === 'logo-only' ? null : nameComponent }
    </div>
  );
};

Product.displayName = 'Product';

export { Product };
