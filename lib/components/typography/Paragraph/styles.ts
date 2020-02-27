import color from 'color';
import { ComponentClassNames, Theme } from '../../..';

export type ParagraphClassNames =
  'Paragraph';

const styles = (theme: Theme): ComponentClassNames<ParagraphClassNames> => ({
  Paragraph: {
    color: 'inherit',
    fontFamily: theme.font.family.default,
    maxWidth: theme.components.Paragraph.maxWidth,
    fontWeight: 300,

    '& code': {
      fontFamily: theme.font.family.code,
      padding: '0.125em 0.2em',
      fontSize: '95%',
      backgroundColor: color(theme.color.brand.gray).
        fade(0.92).
        rgb().
        string(),
      borderRadius: 0,

      '& a:link, & a:visited': {
        fontFamily: 'inherit',
        color: color(theme.color.brand.highlight).
          darken(0.1).
          rgb().
          string()
      }
    },

    '& strong': {
      fontWeight: 600
    },

    '& em': {
      fontStyle: 'italic'
    }
  },

  [theme.breakpoints.up('xs')]: {
    Paragraph: {
      margin: `${theme.space(1)}px 0`,
      fontSize: theme.font.size.md
    }
  },

  [theme.breakpoints.up('md')]: {
    Paragraph: {
      margin: `${theme.space(2)}px 0 ${theme.space(2)}px 0`,
      fontSize: theme.font.size.lg
    }
  }
});

export { styles };
