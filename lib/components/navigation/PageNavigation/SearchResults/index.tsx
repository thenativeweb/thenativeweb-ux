import { createUseStyles } from '../../../../styles';
import NextLink from 'next/link';
import { Breadcrumbs, HighlightText, Link, PageTreeItem, Tags, Theme } from '../../../..';
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { SearchResultsClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, SearchResultsClassNames>(styles);

interface SearchResultsProps {
  nonIdealState?: ReactNode;
  results?: PageTreeItem [];
  query: string;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  nonIdealState,
  results,
  query
}): ReactElement | null => {
  const classes = useStyles();

  if (!results) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className={ classes.SearchResults }>
        { nonIdealState }
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
