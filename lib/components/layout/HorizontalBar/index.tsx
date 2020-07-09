import { Background } from '../../Background';
import { classNames, createUseStyles } from '../../../styles';
import { HorizontalBarClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface HorizontalBarProps {
  align?: 'stretch' | 'center' | 'left' | 'right' | 'space-between';
  background?: Background;
  borderBottom?: boolean;
  borderTop?: boolean;
  className?: string;
  id?: string;
  paddingHorizontal?: 'none' | 'sm' | 'md';
  spaceBetweenItems?: 'none' | 'sm' | 'md' | 'lg';
}

const useStyles = createUseStyles<HorizontalBarClassNames>(styles);

const HorizontalBar: FunctionComponent<HorizontalBarProps> = ({
  align = 'stretch',
  background = 'light',
  borderTop = false,
  borderBottom = true,
  className,
  children,
  id,
  paddingHorizontal = 'md',
  spaceBetweenItems = 'sm'
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.HorizontalBar, {
    [classes.AlignStretch]: align === 'stretch',
    [classes.AlignCenter]: align === 'center',
    [classes.AlignLeft]: align === 'left',
    [classes.AlignRight]: align === 'right',
    [classes.AlignSpaceBetween]: align === 'space-between',
    [classes.BackgroundDark]: background === 'dark',
    [classes.BackgroundLight]: background === 'light',
    [classes.PaddingHorizontalNone]: paddingHorizontal === 'none',
    [classes.PaddingHorizontalSm]: paddingHorizontal === 'sm',
    [classes.PaddingHorizontalMd]: paddingHorizontal === 'md',
    [classes.SpaceBetweenItemsNone]: spaceBetweenItems === 'none',
    [classes.SpaceBetweenItemsSm]: spaceBetweenItems === 'sm',
    [classes.SpaceBetweenItemsMd]: spaceBetweenItems === 'md',
    [classes.SpaceBetweenItemsLg]: spaceBetweenItems === 'lg',
    [classes.WithBorderBottom]: borderBottom,
    [classes.WithBorderTop]: borderTop
  }, className);

  return (
    <div id={ id } className={ componentClasses }>
      { children }
    </div>
  );
};

HorizontalBar.displayName = 'HorizontalBar';

export { HorizontalBar };
