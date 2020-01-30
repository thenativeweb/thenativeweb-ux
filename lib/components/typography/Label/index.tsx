import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { LabelClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface LabelProps {
  className?: string;
  id?: string;
}

const useStyles = createUseStyles<Theme, LabelClassNames>(styles);

const Label: FunctionComponent<LabelProps> = function ({
  children,
  className,
  id
}): ReactElement {
  const classes = useStyles();

  return (
    <div id={ id } className={ classNames(classes.Label, className) }>
      { children }
    </div>
  );
};

export { Label };
