import { Styles } from 'jss';
import { Theme } from '../../../..';

type LogoMinimalClassNames =
  'LogoMinimal' |
  'Foreground' |
  'Background' |
  'Logo' |
  'IsMonochrome' |
  'IsInteractive' |
  'SizeSm' |
  'SizeMd' |
  'SizeLg';

const styles = (theme: Theme): Styles<LogoMinimalClassNames> => ({
  LogoMinimal: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    background: theme.color.brand.dark
  },

  Logo: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    background: theme.color.brand.dark
  },

  Foreground: {
    fill: theme.color.brand.white
  },

  Background: {
    fill: '#FF0099'
  },

  IsMonochrome: {
    '& $Background': {
      fill: theme.color.brand.white
    },
    '& $Foreground': {
      fill: theme.color.brand.dark
    }
  },

  IsInteractive: {
    cursor: 'pointer',
    '&:hover': {
      '& $Background': {
        fill: '#FF0099'
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

export default styles;
