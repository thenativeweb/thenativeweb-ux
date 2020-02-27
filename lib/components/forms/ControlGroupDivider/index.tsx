import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import { ControlGroupDividerClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<Theme, ControlGroupDividerClassNames>(styles);

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
