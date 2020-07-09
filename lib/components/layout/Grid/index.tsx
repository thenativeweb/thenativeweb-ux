import { getSpaceDependentClassNamesFromProps } from '../../../styles/utils';
import { ResponsiveSpaceProp } from '../../../types/ResponsiveSpaceProp';
import { spaceDependentProperties } from './spaceDependentProperties';
import { classNames, createUseStyles } from '../../../styles';
import { GridDefaultClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface GridProps {
  id?: string;
  className?: string;
  columns?: ResponsiveSpaceProp;
  columnGap?: ResponsiveSpaceProp;
  rowGap?: ResponsiveSpaceProp;
  component?: string;
}

const useStyles = createUseStyles<GridDefaultClassNames>(styles);

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

  const spaceDependentClassNames = getSpaceDependentClassNamesFromProps({
    props: {
      columns,
      columnGap,
      rowGap
    },
    definitions: spaceDependentProperties,
    classes
  });

  const componentClasses = classNames(classes.Grid, spaceDependentClassNames, className);

  return (
    React.createElement(component, { className: componentClasses, id }, children)
  );
};

Grid.displayName = 'Grid';

export { Grid };
