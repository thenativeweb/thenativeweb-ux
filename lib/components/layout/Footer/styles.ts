import { ComponentClassNames, Theme } from '../../..';

export type FooterClassNames =
  'Footer' |
  'MadeBy' |
  'Copyright';

const styles = (theme: Theme): ComponentClassNames<FooterClassNames> => ({
  Footer: {
    fontSize: theme.font.size.md,
    fontWeight: 300,
    borderTop: `1px solid ${theme.color.content.border}`,

    textAlign: 'center',
    paddingLeft: theme.space(2),
    paddingRight: theme.space(2)
  },

  MadeBy: {

  },

  Copyright: {

  },

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
    }
  }
});

export { styles };
