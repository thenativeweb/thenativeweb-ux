import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../..';

export type BreadcrumbsClassNames =
  'Breadcrumbs' |
  'PathSeparator' |
  'PathSeparatorIcon' |
  'PathLabel';

const styles = (theme: Theme): Styles<BreadcrumbsClassNames> => ({
  Breadcrumbs: {
    fontSize: theme.font.size.sm,
    color: color(theme.color.brand.grayDark).lighten(1).rgb().toString(),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },

  PathSeparator: {
    display: 'inline-flex',
    marginLeft: 2
  },

  PathSeparatorIcon: {},

  PathLabel: {
    display: 'inline'
  }
});

export { styles };
