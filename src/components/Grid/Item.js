import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const columnCount = 13,
      columns = [ ...new Array(columnCount) ].map((item, index) => index + 1);

const columnProperties = {
  ColumnStart: column => ({
    gridColumnStart: column
  }),
  ColumnEnd: column => ({
    gridColumnEnd: column
  }),
  ColumnSpan: column => ({
    gridColumnEnd: `span ${column}`
  })
};

const createColumnClasses = function ({ deviceSize, theme } = {}) {
  if (!theme) {
    throw new Error('Theme is missing.');
  }

  const classes = {};

  for (const column of columns) {
    for (const propertyName of Object.keys(columnProperties)) {
      classes[`${deviceSize}${propertyName}-${column}`] = columnProperties[propertyName](column);
    }
  }

  return classes;
};

const styles = theme => ({
  Item: {},

  ...createColumnClasses({
    deviceSize: '',
    theme,
    properties: columnProperties
  }),

  ...createColumnClasses({
    deviceSize: 'xs',
    theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }),
  ...createColumnClasses({
    deviceSize: 'sm',
    theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }),
  ...createColumnClasses({
    deviceSize: 'md',
    theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }),
  ...createColumnClasses({
    deviceSize: 'lg',
    theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }),
  ...createColumnClasses({
    deviceSize: 'xl',
    theme,
    properties: {
      ColumnStart: {},
      ColumnEnd: {},
      ColumnSpan: {}
    }
  }),

  [theme.breakpoints.up('xs')]: {
    ...createColumnClasses({ deviceSize: 'xs', theme, properties: columnProperties })
  },

  [theme.breakpoints.up('sm')]: {
    ...createColumnClasses({ deviceSize: 'sm', theme, properties: columnProperties })
  },

  [theme.breakpoints.up('md')]: {
    ...createColumnClasses({ deviceSize: 'md', theme, properties: columnProperties })
  },

  [theme.breakpoints.up('lg')]: {
    ...createColumnClasses({ deviceSize: 'lg', theme, properties: columnProperties })
  },

  [theme.breakpoints.up('xl')]: {
    ...createColumnClasses({ deviceSize: 'xl', theme, properties: columnProperties })
  }
});

const Item = React.memo(({
  component = 'div',
  classes,
  className,
  children,
  columnStart,
  columnSpan,
  columnEnd,
  id,
  style
} = {}) => {
  const columnClasses = [];

  const typeOfColumnStart = typeof columnStart;
  const typeOfColumnEnd = typeof columnEnd;
  const typeOfColumnSpan = typeof columnSpan;

  switch (typeOfColumnStart) {
    case 'string':
    case 'number':
      columnClasses.push(classes[`ColumnStart-${columnStart}`]);
      break;
    case 'object':
      for (const sizeId of Object.keys(columnStart)) {
        columnClasses.push(classes[`${sizeId}ColumnStart-${columnStart[sizeId]}`]);
      }
      break;
    default:
      break;
  }

  switch (typeOfColumnEnd) {
    case 'string':
    case 'number':
      columnClasses.push(classes[`ColumnEnd-${columnEnd}`]);
      break;
    case 'object':
      for (const sizeId of Object.keys(columnEnd)) {
        columnClasses.push(classes[`${sizeId}ColumnEnd-${columnEnd[sizeId]}`]);
      }
      break;
    default:
      break;
  }

  switch (typeOfColumnSpan) {
    case 'string':
    case 'number':
      columnClasses.push(classes[`ColumnSpan-${columnSpan}`]);
      break;
    case 'object':
      for (const sizeId of Object.keys(columnSpan)) {
        columnClasses.push(classes[`${sizeId}ColumnSpan-${columnSpan[sizeId]}`]);
      }
      break;
    default:
      break;
  }

  const componentClasses = classNames(classes.Item, columnClasses, className);

  return React.createElement(component, { className: componentClasses, id, style }, children);
});

Item.propTypes = {
  columnEnd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  columnSpan: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  columnStart: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

Item.displayName = 'GridItem';

export default withStyles(styles)(Item);
