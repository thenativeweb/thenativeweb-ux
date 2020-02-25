import { ComponentClassNames, Theme } from '../../..';

export type LogoTheNativeWebClassNames =
  'LogoTheNativeWeb' |
  'Foreground' |
  'Background' |
  'SizeSm' |
  'SizeMd' |
  'SizeLg' |
  'SizeXl';

const styles = (theme: Theme): ComponentClassNames<LogoTheNativeWebClassNames> => ({
  LogoTheNativeWeb: {},

  Foreground: {
    fill: theme.color.brand.white
  },

  Background: {
    fill: theme.color.brand.highlight
  },

  SizeSm: {
    width: '36px',
    height: '36px'
  },

  SizeMd: {
    width: '56px',
    height: '56px'
  },

  SizeLg: {
    width: '120px',
    height: '120px'
  },

  SizeXl: {
    width: '200px',
    height: '200px'
  }
});

export { styles };
