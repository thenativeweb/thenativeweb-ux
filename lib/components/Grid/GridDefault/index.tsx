import { Classes } from 'jss';
import { getSpaceDependentClassNamesFromProps } from '../../../styles/utils';
import { ResponsiveSpaceProp } from '../../../types/ResponsiveSpaceProp';
import spaceDependentProperties from './spaceDependentProperties';
import Theme from '../../../themes/Theme';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { GridDefaultClassNames } from './styles';

interface GridProps {
  classes: Classes;
  id?: string;
  className?: string;
  columns?: ResponsiveSpaceProp;
  columnGap?: ResponsiveSpaceProp;
  rowGap?: ResponsiveSpaceProp;
  component?: string;
}

const useStyles = createUseStyles<Theme, GridDefaultClassNames>(styles);

const Grid: FunctionComponent<GridProps> = ({
  className,
  columns = { xs: 0, sm: 12 },
  columnGap = 2,
  component = 'div',
  rowGap = 2,
  children,
  id
}): ReactElement => {
  const classes = useStyles();

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

export default Grid;
