import NextLink from 'next/link';
import { Breadcrumbs, createUseStyles, HighlightText, Link, PageTreeItem, Tags, Theme } from '../../../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';
import { SearchResultsClassNames, styles } from './styles';

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
      {
        results.map((result: PageTreeItem): ReactElement => (
          <div
            className={ classes.SearchResult }
            key={ result.path }
          >
            <Breadcrumbs
              items={ result.breadcrumbs?.slice(0, -1) }
              searchWords={ searchWords }
            />

            <NextLink href={ result.path! }>
              <Link
                className={ classes.Page }
                data-path={ result.path }
                href={ result.path }
              >
                <HighlightText searchWords={ searchWords }>
                  { result.title }
                </HighlightText>
              </Link>
            </NextLink>

            <Tags items={ result.keywords } searchWords={ searchWords } />
          </div>
        ))
      }
    </div>
  );
};

export { SearchResults };
