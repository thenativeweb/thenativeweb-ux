import NextLink from 'next/link';
import { Styles } from 'jss';
import { createUseStyles, HighlightText, Icon, Keywords, Link, PageTreeItem, Theme } from '../../../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';

type SearchResultsClassNames =
'SearchResults' |
'Errors' |
'ErrorCause' |
'ErrorTip' |
'SocialIcon' |
'SearchResult' |
'Path' |
'PathSeparator' |
'PathLabel' |
'Page'
;

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

  SocialIcon: {
    fill: 'currentColor'
  },

  SearchResult: {
    margin: 0,
    padding: [ theme.space(2), theme.space(2) ],
    borderBottom: `1px solid ${theme.color.brand.grayLight}`,
    fontSize: theme.font.size.md
  },

  Path: {
    fontSize: theme.font.size.sm,
    color: theme.color.brand.gray,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },

  PathSeparator: {
    display: 'inline-flex',
    marginLeft: 2
  },

  PathSeparatorIcon: {
  },

  PathLabel: {
    display: 'inline'
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

const useStyles = createUseStyles<Theme, SearchResultsClassNames>(styles);

interface SearchResultsProps {
  results?: PageTreeItem [];
  query: string;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({ results, query }): ReactElement | null => {
  const classes = useStyles();

  if (!results) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className={ classes.SearchResults }>
        <div
          className={ classes.Errors }
        >
          <div className={ classes.ErrorCause }>Sorry, no pages found.</div>
          <div className={ classes.ErrorTip }>
            Try searching for something else!
          </div>
        </div>
      </div>
    );
  }

  const searchWords = query.split(' ').filter((word): boolean => word !== '');

  return (
    <div className={ classes.SearchResults }>
      {results.map((result: PageTreeItem): ReactElement => (
        <div
          className={ classes.SearchResult }
          key={ result.path }
        >
          <div className={ classes.Path }>
            { result.breadcrumbs?.map(((breadcrumb, index): ReactElement => (
              <React.Fragment>
                {
                  index > 0 ?
                    (
                      <div className={ classes.PathSeparator }>
                        <Icon name='chevron' size='sm' color='current' />
                      </div>
                    ) : null
                }
                <div className={ classes.PathLabel }>
                  <HighlightText searchWords={ searchWords }>
                    { breadcrumb }
                  </HighlightText>
                </div>
              </React.Fragment>
            )))}
          </div>

          <NextLink href={ `/${result.path}` }>
            <Link
              className={ classes.Page }
              data-path={ result.path }
              href={ `/${result.path}` }
            >
              <HighlightText searchWords={ searchWords }>
                { result.title }
              </HighlightText>
            </Link>
          </NextLink>

          <Keywords keywords={ result.keywords } searchWords={ searchWords } />
        </div>
      ))}
    </div>
  );
};

export { SearchResults };
