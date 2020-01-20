import { Styles } from 'jss';
import { Theme } from '../../../..';

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
