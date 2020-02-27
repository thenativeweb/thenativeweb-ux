import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import { ButtonHintClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

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

ButtonHint.displayName = 'ButtonHint';

export { ButtonHint };
