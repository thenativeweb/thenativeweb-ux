import { ComponentClassNames, Theme } from '../../..';

export type LogoFullClassNames =
'LogoFull' |
'Highlight' |
'White' |
'SizeSm' |
'SizeMd' |
'SizeLg';

const styles = (theme: Theme): ComponentClassNames<LogoFullClassNames> => ({
  LogoFull: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    background: theme.color.brand.grayDark
  },

  Highlight: {
    fill: theme.color.brand.highlight
  },

  White: {
    fill: theme.color.brand.white
  },

  SizeSm: {
    width: '132px',
    height: '22px'
  },

  SizeMd: {
    width: '224px',
    height: 'auto'
  },

  SizeLg: {
    width: '396px',
    height: '66px'
  }
});

export { styles };
