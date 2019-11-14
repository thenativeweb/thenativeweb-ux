import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ControlGroupDividerClassNames } from './styles';

const useStyles = createUseStyles<Theme, ControlGroupDividerClassNames>(styles);

const ControlGroupDivider: FunctionComponent = (): ReactElement => {
  const classes = useStyles();

  return (
    <hr
      className={ classes.ControlGroupDivider }
    />
  );
};

export default ControlGroupDivider;
