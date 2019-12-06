import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../..';

export type ParagraphClassNames =
  'Paragraph' |
  string;

const styles = (theme: Theme): Styles<ParagraphClassNames> => ({
  Paragraph: {
    maxWidth: theme.components.Paragraph.maxWidth,

    '& code': {
      fontFamily: theme.font.family.code,
      padding: '0.2em 0.25em',
      backgroundColor: color(theme.color.brand.highlight).
        fade(0.9).
        rgb().
        string(),
      borderRadius: 0,

      '& a:link, & a:visited': {
        color: color(theme.color.brand.highlight).
          darken(0.1).
          rgb().
          string()
      }
    },

    '& strong': {
      fontWeight: 500
    },

    '& em': {
      fontStyle: 'italic'
    }
  },

  [theme.breakpoints.down('sm')]: {
    Paragraph: {
      paddingRight: theme.space(2)
    }
  }
});

export { styles };
