import { ComponentClassNames, Theme } from '../../..';

export type FooterClassNames =
  'Footer' |
  'BorderTopNone' |
  'BorderTopDark' |
  'ColorLight' |
  'ColorDark' |
  'FontSizeSm' |
  'FontSizeMd' |
  'MadeBy' |
  'Copyright' |
  'Legal' |
  'Contribute';

const styles = (theme: Theme): ComponentClassNames<FooterClassNames> => ({
  Footer: {
    fontWeight: 300,

    '& $MadeBy > *': {
      textAlign: 'left'
    }
  },

  ColorLight: {
    color: theme.color.brand.white
  },

  ColorDark: {
    color: theme.color.brand.gray
  },

  BorderTopNone: {},

  BorderTopDark: {
    borderTop: `1px solid ${theme.color.content.border}`
  },

  FontSizeSm: {
    fontSize: theme.font.size.sm
  },

  FontSizeMd: {
    fontSize: theme.font.size.md
  },

  Contribute: {},

  MadeBy: {},

  Copyright: {},

  Legal: {},

  [theme.breakpoints.down('sm')]: {
    Footer: {
      marginTop: theme.space(4)
    },

    BorderTopDark: {
      paddingTop: theme.space(2)
    }
  },

  [theme.breakpoints.up('sm')]: {
    Footer: {
      marginTop: theme.space(6)
    },

    BorderTopDark: {
      paddingTop: theme.space(4)
    },

    Copyright: {
      textAlign: 'right'
    },

    Legal: {
      textAlign: 'right'
    }
  }
});

export { styles };
