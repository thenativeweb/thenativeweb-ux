import { Styles } from 'jss';
import { Theme } from '../../..';

export type HeadlineClassNames =
  'Headline' |
  'Permalink' |
  'Level1' |
  'Level2' |
  'Level3' |
  'Level4' |
  'Level5' |
  'TextAlignLeft' |
  'TextAlignCenter';

const styles = (theme: Theme): Styles<HeadlineClassNames> => ({
  Headline: {
    fontFamily: theme.font.family.default,
    opacity: 0.95,
    padding: 0,
    margin: 0,
    position: 'relative',

    '&:hover $Permalink': {
      color: theme.color.brand.highlight
    }
  },

  Permalink: {
    position: 'absolute',
    display: 'block',
    left: `-0.7em`,
    top: '0',
    paddingRight: `${theme.space(2)}px`,
    fontSize: `1em`,
    color: theme.color.content.background,
    fontWeight: '600 !important',
    textDecoration: 'none',

    '&:visited': {
      color: `${theme.color.content.background}`
    }
  },

  Level1: {
    fontSize: theme.font.size.xxl,
    fontWeight: 600,
    margin: `${theme.space(4)}px 0 ${theme.space(2)}px 0`,
    marginBottom: `${theme.space(2)}px`,

    '&:first-child': {
      marginTop: 0
    }
  },

  Level2: {
    fontSize: theme.font.size.xl,
    fontWeight: 600,
    margin: `${theme.space(4)}px 0 ${theme.space(1)}px 0`
  },

  Level3: {
    fontSize: theme.font.size.lg,
    fontWeight: 600,
    margin: `${theme.space(2)}px 0 ${theme.space(1)}px 0`
  },

  Level4: {
    fontSize: theme.font.size.md,
    fontWeight: 700,
    margin: `${theme.space(1)}px 0 ${theme.space(0)}px 0`
  },

  Level5: {
    fontSize: theme.font.size.md,
    fontWeight: 600,
    margin: `${theme.space(1)}px 0 ${theme.space(0)}px 0`
  },

  TextAlignLeft: {
    textAlign: 'left'
  },

  TextAlignCenter: {
    textAlign: 'center'
  },

  [theme.breakpoints.down('sm')]: {
    Permalink: {
      color: `${theme.color.brand.highlight} !important`
    },

    Level1: {
      fontSize: theme.font.size.xl
    },

    Level2: {
      fontSize: theme.font.size.lg
    },

    Level3: {
      fontSize: theme.font.size.lg
    },

    Level4: {
      fontSize: theme.font.size.lg
    },

    Level5: {
      fontSize: theme.font.size.lg
    }
  }
});

export { styles };
