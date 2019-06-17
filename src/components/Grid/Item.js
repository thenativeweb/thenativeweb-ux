import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';
import { createDefaultSpaceDependantClasses, createSpaceDependentClasses, getSpaceDependentClassNamesFromProps } from '../../styles/utils';

const spaceDependentProperties = {
  columnStart: ({ spaceFactor }) => ({
    gridColumnStart: spaceFactor
  }),
  columnEnd: ({ spaceFactor }) => ({
    gridColumnEnd: spaceFactor
  }),
  columnSpan: ({ spaceFactor }) => ({
    gridColumnEnd: `span ${spaceFactor}`
  })
};

const styles = theme => ({
  Item: {},

  ...createSpaceDependentClasses({ theme, definitions: spaceDependentProperties }),
  ...createDefaultSpaceDependantClasses({ theme, definitions: spaceDependentProperties }),

  [theme.breakpoints.only('xs')]: {
    Item: {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto'
    }
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

const Item = React.memo(({
  component = 'div',
  classes,
  className,
  children,
  id,
  style,
  ...props
} = {}) => {
  const spaceDependentClassNames = getSpaceDependentClassNamesFromProps({ props, classes, definitions: spaceDependentProperties });
  const componentClasses = classNames(classes.Item, spaceDependentClassNames, className);

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
