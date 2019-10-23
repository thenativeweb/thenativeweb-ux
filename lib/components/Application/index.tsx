import classNames from 'classnames';
import { createUseStyles } from '../../styles';
import { Theme } from '../..';
import View from '../View';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ApplicationClassNames } from './styles';

interface ApplicationProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  contentPosition?: 'aligned' | 'centered';
  style?: any;
}

const useStyles = createUseStyles<Theme, ApplicationClassNames>(styles);

const Application: FunctionComponent<ApplicationProps> = ({
  children,
  className,
  style,
  direction = 'horizontal',
  contentPosition = 'aligned'
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.Application, className);

  return (
    <View className={ componentClasses } direction={ direction } contentPosition={ contentPosition } style={ style }>
      { children }
    </View>
  );
};

export default Application;
