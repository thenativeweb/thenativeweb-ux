import { classNames, createUseStyles } from '../../../styles';
import { PatternClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface PatternProps {
  className?: string;
}

const useStyles = createUseStyles<PatternClassNames>(styles);

const Pattern: FunctionComponent<PatternProps> = ({ children, className }): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.Pattern,
    className
  );

  return <div className={ componentClasses }>{ children }</div>;
};

Pattern.displayName = 'Pattern';

export { Pattern };
