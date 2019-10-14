import { Styles } from 'jss';
import { Theme } from '../../..';

export type MadeByClassNames =
  'MadeBy' |
  'ColorDark' |
  'ColorLight'|
  'SizeSm'|
  'SizeMd'|
  'SizeLg';

const styles = (theme: Theme): Styles<MadeByClassNames> => ({
  MadeBy: {
    overflow: 'hidden',
    fontFamily: theme.font.family.default,
    textAlign: 'center',
    paddingTop: theme.space(1),
    paddingBottom: theme.space(1)
  },

  ColorDark: {
    color: theme.color.brand.lightGrey
  },

  ColorLight: {
    color: theme.color.brand.dark
  },

  SizeSm: {
    fontSize: theme.font.size.sm
  },

  SizeMd: {
    fontSize: theme.font.size.md
  },

  SizeLg: {
    fontSize: theme.font.size.lg
  }
});

export default styles;
