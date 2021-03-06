import color from 'color';
import { ComponentClassNames, Theme } from '../../../..';

export type PageClassNames =
  'Page' |
  'IsActive';

const styles = (theme: Theme): ComponentClassNames<PageClassNames> => ({
  Page: {
    display: 'block',
    color: theme.color.brand.gray,
    lineHeight: theme.font.size.xl,
    marginLeft: theme.space(-2),
    padding: `${theme.space(0.5)}px ${theme.space(2)}px ${theme.space(0.5)}px ${theme.space(2)}px`,

    '&:hover': {
      color: theme.color.brand.highlight
    },

    '&.Level2, &.Level3, &.Level4, &.Level5': {
      paddingLeft: theme.space(6.5)
    }
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
