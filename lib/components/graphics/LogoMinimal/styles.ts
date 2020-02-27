import { ComponentClassNames, Theme } from '../../..';

export type LogoMinimalClassNames =
  'LogoMinimal' |
  'Foreground' |
  'Background' |
  'IsMonochrome' |
  'IsInteractive' |
  'SizeSm' |
  'SizeMd' |
  'SizeLg';

const styles = (theme: Theme): ComponentClassNames<LogoMinimalClassNames> => ({
  LogoMinimal: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    background: theme.color.brand.grayDark
  },

  Foreground: {
    fill: theme.color.brand.white
  },

  Background: {
    fill: theme.color.brand.highlight
  },

  IsMonochrome: {
    '& $Background': {
      fill: theme.color.brand.white
    },
    '& $Foreground': {
      fill: theme.color.brand.grayDark
    }
  },

  IsInteractive: {
    cursor: 'pointer',
    '&:hover': {
      '& $Background': {
        fill: theme.color.brand.highlight
      },
      '& $Foreground': {
        fill: theme.color.brand.white
      }
    }
  },

  SizeSm: {
    width: '28px',
    height: '28px'
  },

  SizeMd: {
    width: '42px',
    height: '42px'
  },

  SizeLg: {
    width: '112px',
    height: '112px'
  }
});

export { styles };
