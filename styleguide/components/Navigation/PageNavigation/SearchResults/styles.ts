import { Styles } from 'jss';
import { Theme } from '../../../../../lib';

export type SearchResultsClassNames =
  'SearchResults' |
  'Errors' |
  'ErrorCause' |
  'ErrorTip' |
  'SocialIcon' |
  'SearchResult' |
  'Page';

const styles = (theme: Theme): Styles => ({
  SearchResults: {},

  Errors: {
    marginTop: theme.space(4),
    padding: theme.space(2),
    textAlign: 'center'
  },

  ErrorCause: {
    fontSize: theme.font.size.lg
  },

  ErrorTip: {
    marginTop: theme.space(3),
    fontWeight: 400,

    '& p': {
      margin: '0 0 4px 0'
    }
  },

  ErrorHelp: {
    marginTop: theme.space(1),
    fontWeight: 400,

    '& p': {
      marginBottom: theme.space(3)
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
  },

  SearchResult: {
    margin: 0,
    padding: [ theme.space(2), theme.space(2) ],
    borderBottom: `1px solid ${theme.color.brand.grayLight}`,
    fontSize: theme.font.size.md,

    '& > *': {
      marginBottom: theme.space(1)
    },
    '& > *:last-child': {
      marginBottom: 0
    }
  },

  Page: {
    display: 'block',

    '&:link, &:visited': {
      fontWeight: 600
    },

    '&:hover, &:focus': {
      color: theme.color.brand.highlight,
      opacity: 1,
      background: 'transparent'
    }
  }
});

export { styles };
