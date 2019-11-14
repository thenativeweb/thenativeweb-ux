import { Styles } from 'jss';
import { Theme } from '../../..';

export type LogoFullClassNames =
'LogoFull' |
'SizeSm' |
'SizeMd' |
'SizeLg';

const styles = (theme: Theme): Styles<LogoFullClassNames> => ({
  LogoFull: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    background: theme.color.brand.grayDark
  },

  SizeSm: {
    width: '132px',
    height: '22px'
  },

  SizeMd: {
    width: '264px',
    height: '44px'
  },

  SizeLg: {
    width: '396px',
    height: '66px'
  }
});

export default styles;
