import { Background } from '../../Background';
import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { ContainerClassNames, styles } from './styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface ContainerProps {
  className?: string;
  background?: Background;
  id?: string;
  horizontal?: 'left' | 'center' | 'right'| 'stretch';
  isScrollable?: boolean;
  vertical?: 'top' | 'center' | 'bottom' | 'stretch';
  style?: CSSProperties;
}

const useStyles = createUseStyles<Theme, ContainerClassNames>(styles);

const Container: FunctionComponent<ContainerProps> = ({
  className,
  background = 'none',
  children,
  id,
  horizontal = 'center',
  isScrollable = false,
  vertical = 'center',
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClassNames = classNames(
    classes.Container,
    {
      [classes.BackgroundDark]: background === 'dark',
      [classes.BackgroundGray]: background === 'gray',
      [classes.BackgroundNone]: background === 'none',
      [classes.HorizontalLeft]: horizontal === 'left',
      [classes.HorizontalCenter]: horizontal === 'center',
      [classes.HorizontalRight]: horizontal === 'right',
      [classes.HorizontalStretch]: horizontal === 'stretch',
      [classes.IsScrollable]: isScrollable,
      [classes.VerticalCenter]: vertical === 'center',
      [classes.VerticalStretch]: vertical === 'stretch',
      [classes.VerticalTop]: vertical === 'top',
      [classes.VerticalBottom]: vertical === 'bottom'
    },
    className
  );

  return (
    <div id={ id } className={ componentClassNames } style={ style }>
      { children }
    </div>
  );
};

export { Container };
