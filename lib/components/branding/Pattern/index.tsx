import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { PatternClassNames } from './styles';

interface PatternProps {
  className?: string;
  type?: 'default';
}

const useStyles = createUseStyles<Theme, PatternClassNames>(styles);

const Pattern: FunctionComponent<PatternProps> = ({ children, className, type = 'default' }): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.Pattern,
    {
      [classes.TypeDefault]: type
    },
    className
  );

  return <div className={ componentClasses }>{ children }</div>;
};

export default Pattern;
