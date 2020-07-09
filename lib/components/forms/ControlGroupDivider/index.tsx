import { createUseStyles } from '../../../styles';
import { ControlGroupDividerClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<ControlGroupDividerClassNames>(styles);

const ControlGroupDivider: FunctionComponent = (): ReactElement => {
  const classes = useStyles();

  return (
    <hr
      className={ classes.ControlGroupDivider }
    />
  );
};

ControlGroupDivider.displayName = 'ControlGroupDivider';

export { ControlGroupDivider };
