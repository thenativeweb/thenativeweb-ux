import { Chapter } from './Chapter';
import { createUseStyles } from '../../../styles';
import { Page } from './Page';
import { PageSearch } from '../PageTree/PageSearch';
import { SearchResults } from './SearchResults';
import { Section } from './Section';
import {
  HorizontalBar, PageTree, PageTreeItem, TextBox, Theme
} from '../../..';
import { PageNavigationClassNames, styles } from './styles';
import React, { ChangeEvent, FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';

const useStyles = createUseStyles<Theme, PageNavigationClassNames>(styles);

const renderChapterOrPages = (item: PageTreeItem, activePath: string): ReactElement => {
  if (item.children) {
    return (
      <Chapter title={ item.title } key={ item.path } activePath={ activePath }>
        {
          item.children.map((page: PageTreeItem): ReactElement => (
            <Page title={ page.title } key={ page.title } activePath={ activePath } />
          ))
        }
      </Chapter>
    );
  }

  return (
    <Page title={ item.title } key={ item.title } activePath={ activePath } />
  );
};

const renderSection = (section: PageTreeItem, activePath: string): ReactElement => (
  <Section title={ section.title } key={ section.path } activePath={ activePath }>
    {
      section.children?.map((chapterOrPage): ReactElement => renderChapterOrPages(chapterOrPage, activePath))
    }
  </Section>
);

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
  const [ results, setResults ] = useState<PageTreeItem []>([]);

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
            pageTree.items.map((section): ReactElement => renderSection(section, activePath)) :
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
