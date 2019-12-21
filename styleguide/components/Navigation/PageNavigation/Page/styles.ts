import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../../../../lib';

export type PageClassNames =
  'Page' |
  'Level2' |
  'Level3' |
  'IsActive';

const styles = (theme: Theme): Styles => ({
  Page: {
    display: 'block',
    color: theme.color.brand.gray,

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  Level2: {
    padding: [ theme.space(0.5), theme.space(2), theme.space(0.5), theme.space(4.5) ]
  },

  Level3: {
    padding: [ theme.space(0.5), theme.space(2), theme.space(0.5), theme.space(6) ]
  },

  IsActive: {
    borderLeft: '1px solid',
    borderLeftColor: color(theme.color.brand.highlight).
      darken(0.2).
      rgb().
      string(),
    background: theme.color.brand.highlight,
    color: theme.color.brand.white,
    fontWeight: 600,

    '&:hover': {
      color: theme.color.brand.white
    }
  },

  [theme.breakpoints.up('xs')]: {
    Page: {
      fontSize: theme.font.size.md
    }
  }
});

export { styles };
