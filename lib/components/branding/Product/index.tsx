import { classNames, createUseStyles, useTheme } from '../../../styles';
import { LogoTheNativeWeb, LogoWolkenkit, Theme } from '../../..';
import { ProducClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ProductProps {
  name?: string;
  isAnimated?: boolean;
  size?: 'md' | 'lg' | 'xl';
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
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg',
    [classes.SizeXl]: size === 'xl',
    [classes.TypeLogoOnly]: type === 'logo-only',
    [classes.TypeTextOnly]: type === 'text-only'
  });

  let nameComponent = <div className={ classes.Name }>{ name }</div>;
  let Logo = LogoTheNativeWeb;

  if (theme.name === 'Wolkenkit' || name === 'wolkenkit') {
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

export { Product };
