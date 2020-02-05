import { getSpaceDependentClassNamesFromProps } from '../../../styles/utils';
import { ResponsiveSpaceProp } from '../../../types/ResponsiveSpaceProp';
import { spaceDependentProperties } from './spaceDependentProperties';
import { styles } from './styles';
import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface GridItemProps {
  id?: string;
  className?: string;
  columnStart?: ResponsiveSpaceProp;
  columnSpan?: ResponsiveSpaceProp;
  columnEnd?: ResponsiveSpaceProp;
  component?: string;
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
const useStyles = createUseStyles<Theme, string>(styles);

const GridItem: FunctionComponent<GridItemProps> = ({
  component = 'div',
  className,
  children,
  id,
  style,
  ...props
}): ReactElement => {
  const classes = useStyles();

  const spaceDependentClassNames = getSpaceDependentClassNamesFromProps({
    props: props as Partial<{ [key: string]: ResponsiveSpaceProp }>,
    classes,
    definitions: spaceDependentProperties
  });

  const componentClasses = classNames(classes.GridItem, spaceDependentClassNames, className);

  return React.createElement(component, { className: componentClasses, style, id }, children);
};

export { GridItem };
