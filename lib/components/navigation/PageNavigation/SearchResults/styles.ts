import { ComponentClassNames, Theme } from '../../../..';

export type SearchResultsClassNames =
  'SearchResults' |
  'SearchResult' |
  'Page';

const getStyles = (theme: Theme): ComponentClassNames<SearchResultsClassNames> => ({
  SearchResults: {},

  SearchResult: {
    margin: 0,
    padding: theme.space(2),
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

export { getStyles as styles };
