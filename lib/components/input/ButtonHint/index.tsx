import { createUseStyles } from '../../../styles';
import { ButtonHintClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<ButtonHintClassNames>(styles);

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
