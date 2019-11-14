import { Styles } from 'jss';
import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { styles, TextClassNames } from './styles';

interface TextProps {
  adjust?: 'flex' | 'auto';
  breakLines?: boolean;
  className?: string;
  id?: string;
  size?: 'sm' | 'md';
  style?: Styles;
}

const useStyles = createUseStyles<Theme, TextClassNames>(styles);

const Text: FunctionComponent<TextProps> = ({
  adjust = 'auto',
  breakLines = false,
  className,
  children,
  id,
  size = 'md',
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.Text,
    {
      [classes.BreakLines]: breakLines,
      [classes.AdjustFlex]: adjust === 'flex',
      [classes.AdjustAuto]: adjust === 'auto',
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md'
    },
    className
  );

  return (
    <div id={ id } className={ componentClasses } style={ style }>
      { children }
    </div>
  );
};

export { Text };
