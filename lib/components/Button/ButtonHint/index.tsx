import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ButtonHintClassNames } from './styles';

const useStyles = createUseStyles<Theme, ButtonHintClassNames>(styles);

const ButtonHint: FunctionComponent = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <span className={ classes.ButtonHint }>
      { children }
    </span>
  );
};

export default ButtonHint;
