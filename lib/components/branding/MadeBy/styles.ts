import { ComponentClassNames, Theme } from '../../..';

export type MadeByClassNames =
  'MadeBy' |
  'ColorDark' |
  'ColorLight'|
  'SizeSm'|
  'SizeMd'|
  'SizeLg';

const styles = (theme: Theme): ComponentClassNames<MadeByClassNames> => ({
  MadeBy: {
    overflow: 'hidden',
    fontFamily: theme.font.family.default,
    textAlign: 'center'
  },

  ColorDark: {
    color: theme.color.brand.grayDark
  },

  ColorLight: {
    color: theme.color.brand.white
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

export { styles };
