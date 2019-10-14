import { Theme } from '../..';
import { classNames, createUseStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ViewClassNames } from './styles';

interface ViewProps {
  adjust?: 'auto' | 'flex';
  alignItems?: 'center';
  background?: 'dark' | 'light';
  className?: string;
  id?: string;
  justifyContent?: 'center';
  orientation?: 'horizontal' | 'vertical' | 'centered';
  scrollable?: false | 'auto';
  style?: any;
}

const useStyles = createUseStyles<Theme, ViewClassNames>(styles);

const View: FunctionComponent<ViewProps> = ({
  adjust,
  alignItems,
  background,
  children,
  className,
  id,
  justifyContent,
  scrollable,
  style,
  orientation
}): ReactElement => {
  const classes = useStyles();
  const viewClassNames = classNames(
    classes.View,
    {
      [classes.AdjustAuto]: adjust === 'auto',
      [classes.AdjustFlex]: adjust === 'flex',
      [classes.AlignItemsCenter]: alignItems === 'center',
      [classes.BackgroundLight]: background === 'light',
      [classes.BackgroundDark]: background === 'dark',
      [classes.JustifyContentCenter]: justifyContent === 'center',
      [classes.OrientationCentered]: orientation === 'centered',
      [classes.OrientationHorizontal]: orientation === 'horizontal',
      [classes.OrientationVertical]: orientation === 'vertical',
      [classes.ScrollableAuto]: scrollable === 'auto'
    },
    className
  );

  return (
    <div id={ id } className={ viewClassNames } style={ style }>
      { children }
    </div>
  );
};

export default View;
