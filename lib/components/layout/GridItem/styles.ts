import { Styles } from 'jss';
import { Theme } from '../../..';

const columnCount = 13,
      columns = [ ...new Array(columnCount) ].map((item, index): number => index + 1);

const columnProperties = {
  ColumnStart (column: number): Styles {
    const styles: Styles = {
      gridColumnStart: String(column)
    };

    return styles;
  },
  ColumnEnd (column: number): Styles {
    const styles: Styles = {
      gridColumnEnd: String(column + 1)
    };

    return styles;
  },
  ColumnSpan (column: number): Styles {
    const styles: Styles = {
      gridColumnStart: `span ${column}`
    };

    return styles;
  }
};

const createColumnClasses = function ({ deviceSize }: { deviceSize: string }): Styles {
  const classes: Styles = {};

  for (const column of columns) {
    /* eslint-disable new-cap */
    classes[`${deviceSize}ColumnStart-${column}`] = columnProperties.ColumnStart(column);
    classes[`${deviceSize}ColumnEnd-${column}`] = columnProperties.ColumnEnd(column);
    classes[`${deviceSize}ColumnSpan-${column}`] = columnProperties.ColumnSpan(column);
    /* eslint-enable new-cap */
  }

  return classes;
};

const styles = (theme: Theme): Styles => ({
  GridItem: {
    width: '100%'
  },

  ...createColumnClasses({
    deviceSize: ''
  }),

  ...createColumnClasses({
    deviceSize: 'xs'
  }),
  ...createColumnClasses({
    deviceSize: 'sm'
  }),
  ...createColumnClasses({
    deviceSize: 'md'
  }),
  ...createColumnClasses({
    deviceSize: 'lg'
  }),
  ...createColumnClasses({
    deviceSize: 'xl'
  }),

  [theme.breakpoints.up('xs')]: {
    ...createColumnClasses({ deviceSize: 'xs' })
  },

  [theme.breakpoints.up('sm')]: {
    ...createColumnClasses({ deviceSize: 'sm' })
  },

  [theme.breakpoints.up('md')]: {
    ...createColumnClasses({ deviceSize: 'md' })
  },

  [theme.breakpoints.up('lg')]: {
    ...createColumnClasses({ deviceSize: 'lg' })
  },

  [theme.breakpoints.up('xl')]: {
    ...createColumnClasses({ deviceSize: 'xl' })
  }
});

export { styles };
