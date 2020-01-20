import { Styles } from 'jss';
import { Theme } from '../../..';

export type NonIdealStateClassNames =
  'NonIdealState' |
  'Cause' |
  'Tip' |
  'Help';

const styles = (theme: Theme): Styles<NonIdealStateClassNames> => ({
  NonIdealState: {
    marginTop: theme.space(4),
    padding: theme.space(2),
    textAlign: 'center'
  },

  Cause: {
    fontSize: theme.font.size.lg,
    fontWeight: 600
  },

  Tip: {
    marginTop: theme.space(3),

    '& p': {
      margin: '0 0 4px 0'
    }
  },

  Help: {
    marginTop: theme.space(2),
    fontWeight: 400,

    '& p': {
      maxWidth: '480px',
      marginBottom: theme.space(1)
    },

    '& a, & a:visited': {
      marginRight: theme.space(4),
      color: 'inherit'
    },

    '& a:last-child': {
      marginRight: 0
    },

    '& a:hover': {
      color: theme.color.brand.highlight
    }
  }
});

export { styles };
