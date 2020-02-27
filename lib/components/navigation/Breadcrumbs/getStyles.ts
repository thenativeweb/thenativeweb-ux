import color from 'color';
import { ComponentClassNames, Theme } from '../../..';

export type BreadcrumbsClassNames =
  'Breadcrumbs' |
  'Breadcrumb' |
  'Separator' |
  'ColorLight' |
  'ColorDark' |
  'SizeMd' |
  'SizeSm';

const getStyles = (theme: Theme): ComponentClassNames<BreadcrumbsClassNames> => ({
  Breadcrumbs: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },

  Separator: {
    display: 'inline-flex'
  },

  Breadcrumb: {
    display: 'inline'
  },

  ColorLight: {
    color: color(theme.color.brand.grayDark).lighten(2).rgb().toString()
  },

  ColorDark: {
    color: color(theme.color.brand.grayDark).lighten(1).rgb().toString()
  },

  SizeSm: {
    fontSize: theme.font.size.sm,

    '& $Separator': {
      marginLeft: '2px'
    }
  },

  SizeMd: {
    fontSize: theme.font.size.md,

    '& $Separator': {
      marginLeft: theme.space(1),
      marginRight: theme.space(0.5)
    }
  }
});

export { getStyles };
