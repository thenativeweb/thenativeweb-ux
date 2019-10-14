import classNames from 'classnames';
import { createUseStyles } from '../../styles';
import { Theme } from '../..';
import View from '../View';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ApplicationClassNames } from './styles';

interface ApplicationProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical' | 'centered';
  style?: any;
}

const useStyles = createUseStyles<Theme, ApplicationClassNames>(styles);

const Application: FunctionComponent<ApplicationProps> = ({
  children,
  className,
  style,
  orientation = 'horizontal'
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.Application, className);

  return (
    <View className={ componentClasses } orientation={ orientation } style={ style }>
      { children }
    </View>
  );
};

export default Application;
