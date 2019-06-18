import Item from './Item';
import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';
import { createDefaultSpaceDependantClasses, createSpaceDependentClasses, getSpaceDependentClassNamesFromProps } from '../../styles/utils';

const spaceDependentProperties = {
  columns: ({ spaceFactor }) => ({
    'grid-template-columns': `repeat(${spaceFactor}, [col] minmax(0, 1fr))`
  }),
  columnGap: ({ spaceFactor, theme }) => ({
    'grid-column-gap': theme.space(spaceFactor)
  }),
  rowGap: ({ spaceFactor, theme }) => ({
    'grid-row-gap': theme.space(spaceFactor)
  })
};

const styles = theme => ({
  Grid: {
    width: '100%',
    display: 'grid'
  },

  ...createSpaceDependentClasses({ theme, definitions: spaceDependentProperties }),
  ...createDefaultSpaceDependantClasses({ theme, definitions: spaceDependentProperties }),

  [theme.breakpoints.only('xs')]: {
    Grid: {
      'grid-template-columns': `none`
    },

    ...createSpaceDependentClasses({ deviceSize: 'xs', theme, definitions: spaceDependentProperties })
  },

  [theme.breakpoints.up('sm')]: {
    ...createSpaceDependentClasses({ deviceSize: 'sm', theme, definitions: spaceDependentProperties })
  },

  [theme.breakpoints.up('md')]: {
    ...createSpaceDependentClasses({ deviceSize: 'md', theme, definitions: spaceDependentProperties })
  },

  [theme.breakpoints.up('lg')]: {
    ...createSpaceDependentClasses({ deviceSize: 'lg', theme, definitions: spaceDependentProperties })
  },

  [theme.breakpoints.up('xl')]: {
    ...createSpaceDependentClasses({ deviceSize: 'xl', theme, definitions: spaceDependentProperties })
  }
});

const Grid = ({ component = 'div', classes, className, children, id, ...props } = {}) => {
  const spaceDependentClassNames = getSpaceDependentClassNamesFromProps({ props, classes, definitions: spaceDependentProperties });
  const componentClasses = classNames(classes.Grid, spaceDependentClassNames, className);

  return (
    React.createElement(component, { className: componentClasses, id }, children)
  );
};

Grid.defaultProps = {
  columns: '12',
  columnGap: 2,
  rowGap: 2
};

Grid.propTypes = {
  columnGap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  columns: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  rowGap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

Grid.Item = Item;

Grid.displayName = 'Grid';

export default withStyles(styles)(Grid);
