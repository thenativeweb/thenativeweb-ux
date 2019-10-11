import { Classes } from 'jss';
import { getSpaceDependentClassNamesFromProps } from '../../../styles/utils';
import { ResponsiveSpaceProp } from '../../../types/ResponsiveSpaceProp';
import spaceDependentProperties from './spaceDependentProperties';
import styles from './styles';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface GridProps {
  classes: Classes;
  id?: string;
  className?: string;
  columns?: ResponsiveSpaceProp;
  columnGap?: ResponsiveSpaceProp;
  rowGap?: ResponsiveSpaceProp;
  component?: string;
}

const Grid: FunctionComponent<GridProps> = ({
  classes,
  className,
  columns = { xs: 0, sm: 12 },
  columnGap = 2,
  component = 'div',
  rowGap = 2,
  children,
  id
}): ReactElement => {
  const spaceDependentClassNames = getSpaceDependentClassNamesFromProps(
    {
      columns,
      columnGap,
      rowGap
    },
    spaceDependentProperties,
    classes,
  );

  const componentClasses = classNames(classes.Grid, spaceDependentClassNames, className);

  return (
    React.createElement(component, { className: componentClasses, id }, children)
  );
};

export default withStyles(styles)(Grid);
