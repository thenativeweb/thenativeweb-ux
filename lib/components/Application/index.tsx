import classNames from 'classnames';
import styles from './styles';
import View from '../View';
import { withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ApplicationProps {
  classes: { [key: string]: string };
  className?: string;
  orientation?: 'horizontal' | 'vertical' | 'centered';
  style?: any;
}

const Application: FunctionComponent<ApplicationProps> = ({
  children,
  classes,
  className,
  style,
  orientation = 'horizontal'
}): ReactElement => {
  const componentClasses = classNames(classes.Application, className);

  return (
    <View className={ componentClasses } orientation={ orientation } style={ style }>
      { children }
    </View>
  );
};

export default withStyles(styles)(Application);
