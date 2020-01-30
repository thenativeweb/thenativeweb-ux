import { ResponsiveSpaceProp } from '../../../types/ResponsiveSpaceProp';
import { styles } from './styles';
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

const useStyles = createUseStyles(styles);

const GridItem: FunctionComponent<GridItemProps> = ({
  component = 'div',
  className,
  children,
  columnStart,
  columnSpan,
  columnEnd,
  id,
  style
}): ReactElement => {
  const classes = useStyles();
  const columnClasses = [];

  if (typeof columnStart === 'object') {
    for (const sizeId of Object.keys(columnStart)) {
      columnClasses.push(classes[`${sizeId}ColumnStart-${columnStart[sizeId]}`]);
    }
  } else {
    columnClasses.push(classes[`ColumnStart-${columnStart}`]);
  }

  if (typeof columnEnd === 'object') {
    for (const sizeId of Object.keys(columnEnd)) {
      columnClasses.push(classes[`${sizeId}ColumnEnd-${columnEnd[sizeId]}`]);
    }
  } else {
    columnClasses.push(classes[`ColumnEnd-${columnEnd}`]);
  }

  if (typeof columnSpan === 'object') {
    for (const sizeId of Object.keys(columnSpan)) {
      columnClasses.push(classes[`${sizeId}ColumnSpan-${columnSpan[sizeId]}`]);
    }
  } else {
    columnClasses.push(classes[`ColumnSpan-${columnSpan}`]);
  }

  const componentClasses = classNames(classes.GridItem, columnClasses, className);

  return React.createElement(component, { className: componentClasses, style, id }, children);
};

export { GridItem };
