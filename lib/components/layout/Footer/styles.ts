import { ComponentClassNames, Theme } from '../../..';

export type FooterClassNames =
  'Footer' |
  'MadeBy' |
  'Copyright' |
  'Legal' |
  'Contribute';

const styles = (theme: Theme): ComponentClassNames<FooterClassNames> => ({
  Footer: {
    fontSize: theme.font.size.md,
    fontWeight: 300,
    borderTop: `1px solid ${theme.color.content.border}`,

    '& $MadeBy > *': {
      textAlign: 'left'
    }
  },

  Contribute: {},

  MadeBy: {},

  Copyright: {},

  Legal: {},

  [theme.breakpoints.down('sm')]: {
    Footer: {
      marginTop: theme.space(4),
      paddingTop: theme.space(2)
    }
  },

  [theme.breakpoints.up('sm')]: {
    Footer: {
      marginTop: theme.space(6),
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
