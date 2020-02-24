import { createUseStyles } from '../../../styles';
import { Page } from './Page';
import { PageGroup } from './PageGroup';
import { PageSearch } from '../PageTree/PageSearch';
import { SearchResults } from './SearchResults';
import {
  HorizontalBar, PageTree, PageTreeItemWithMetadata, TextBox, Theme
} from '../../..';
import { PageNavigationClassNames, styles } from './styles';
import React, { ChangeEvent, FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';

const useStyles = createUseStyles<Theme, PageNavigationClassNames>(styles);

const renderItems = ({
  item,
  activePath,
  level
}: {
  item: PageTreeItemWithMetadata;
  activePath: string;
  level: number;
}): ReactElement => {
  if (item.children) {
    return (
      <PageGroup
        title={ item.title }
        key={ item.path }
        activePath={ activePath }
        path={ item.path }
        level={ level }
      >
        {
          item.children.map((childItem): ReactElement => renderItems({ item: childItem, activePath, level: level + 1 }))
        }
      </PageGroup>
    );
  }

  return (
    <Page
      path={ item.path }
      level={ level }
      title={ item.title }
      key={ item.title }
      activePath={ activePath }
    />
  );
};

interface PageNavigationProps {
  id?: string;
  header?: ReactNode;
  footer?: ReactNode;
  pageTree: PageTree;
  nonIdealState?: ReactNode;
  showSearchBar?: boolean;
  activePath: string;
}
const PageNavigation: FunctionComponent<PageNavigationProps> = ({
  id,
  footer,
  header,
  pageTree,
  nonIdealState,
  showSearchBar,
  activePath
}): ReactElement => {
  const classes = useStyles();

  const pageSearch = new PageSearch(pageTree);

  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState<PageTreeItemWithMetadata []>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newQuery = event.target.value;
    const newResults = pageSearch.query(newQuery);

    setQuery(newQuery);
    setResults(newResults);
  };

  useEffect((): void => {
    setQuery('');
    setResults([]);
  }, [ showSearchBar ]);

  const level = 1;

  return (
    <div id={ id } className={ classes.PageNavigation }>
      {
        header
      }
      {
        showSearchBar ?
          (
            <HorizontalBar className={ classes.SearchBar }>
              <TextBox
                className={ classes.SearchField }
                value={ query }
                autoFocus={ true }
                placeholder='Search…'
                type='search'
                onChange={ handleChange }
              />
            </HorizontalBar>
          ) : null
      }
      <div className={ classes.Content }>
        {
          query.length === 0 ?
            pageTree.items.map((item): ReactElement => renderItems({ item, activePath, level })) :
            null
        }
        {
          query.length > 0 ?
            (
              <SearchResults
                query={ query }
                results={ results }
                nonIdealState={ nonIdealState }
              />
            ) : null
        }
      </div>
      {
        footer
      }
    </div>
  );
};

export { PageNavigation };
