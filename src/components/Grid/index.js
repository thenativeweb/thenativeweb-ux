import Item from './Item';
import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Grid: {
    width: '100%',
    display: 'grid'
  },

  Columns2: {
    'grid-template-columns': 'repeat(2, [col] 1fr)'
  },

  Columns3: {
    'grid-template-columns': 'repeat(3, [col] 1fr)'
  },

  Columns12: {
    'grid-template-columns': 'repeat(12, [col] 1fr)'
  },

  ColumnGap1: {
    'grid-column-gap': theme.space(1)
  },

  ColumnGap2: {
    'grid-column-gap': theme.space(2)
  },

  ColumnGap3: {
    'grid-column-gap': theme.space(3)
  },

  ColumnGap4: {
    'grid-column-gap': theme.space(4)
  },

  ColumnGap5: {
    'grid-column-gap': theme.space(5)
  },

  ColumnGap6: {
    'grid-column-gap': theme.space(8)
  },

  [theme.breakpoints.down('xs')]: {
    Grid: {
      display: 'block'
    }
  }
});

const Grid = React.memo(({ component = 'div', classes, columns, columnGap, children } = {}) => {
  const componentClasses = classNames(classes.Grid, {
    [classes[`Columns${columns}`]]: columns,
    [classes[`ColumnGap${columnGap}`]]: columnGap
  });

  return (
    React.createElement(component, { className: componentClasses }, children)
  );
});

Grid.defaultProps = {
  columns: '12',
  columnGap: 2
};

Grid.propTypes = {
  columnGap: PropTypes.number,
  columns: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Grid.displayName = 'Grid';

Grid.Item = Item;

export default withStyles(styles)(Grid);
