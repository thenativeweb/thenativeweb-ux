import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ViewProps {
  adjust?: 'auto' | 'flex';
  alignItems?: 'center';
  background?: 'dark' | 'light';
  classes: { [key: string]: string };
  className?: string;
  id?: string;
  justifyContent?: 'center';
  orientation?: 'horizontal' | 'vertical' | 'centered';
  scrollable?: false | 'auto';
  style?: any;
}

const View: FunctionComponent<ViewProps> = ({
  adjust,
  alignItems,
  background,
  children,
  classes,
  className,
  id,
  justifyContent,
  scrollable,
  style,
  orientation
}): ReactElement => {
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

export default withStyles(styles)(View);
