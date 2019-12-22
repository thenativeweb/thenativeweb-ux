import { Chapter } from './Chapter';
import { createUseStyles } from '../../../styles';
import { Page } from './Page';
import { SearchResults } from './SearchResults';
import { Section } from './Section';
import {
  HorizontalBar, PageTree, PageTreeItem, TextBox, Theme
} from '../../..';
import { PageNavigationClassNames, styles } from './styles';
import React, { ChangeEvent, FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';

const useStyles = createUseStyles<Theme, PageNavigationClassNames>(styles);

const renderChapterOrPages = (item: PageTreeItem): ReactElement => {
  if (item.children) {
    return (
      <Chapter title={ item.title } key={ item.path }>
        {
          item.children.map((page: PageTreeItem): ReactElement => (
            <Page title={ page.title } key={ page.title } />
          ))
        }
      </Chapter>
    );
  }

  return (
    <Page title={ item.title } key={ item.title } />
  );
};

const renderSection = (section: PageTreeItem): ReactElement => (
  <Section title={ section.title } key={ section.path }>
    {
      section.children?.map((chapterOrPage): ReactElement => renderChapterOrPages(chapterOrPage))
    }
  </Section>
);

interface PageNavigationProps {
  header?: ReactNode;
  footer?: ReactNode;
  pageTree: PageTree;
  nonIdealState?: ReactNode;
  showSearchBar?: boolean;
}
const PageNavigation: FunctionComponent<PageNavigationProps> = ({
  footer,
  header,
  pageTree,
  nonIdealState,
  showSearchBar
}): ReactElement => {
  const classes = useStyles();

  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState<PageTreeItem []>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newQuery = event.target.value;
    const newResults = pageTree.search(newQuery);

    setQuery(newQuery);
    setResults(newResults);
  };

  useEffect((): void => {
    setQuery('');
    setResults([]);
  }, [ showSearchBar ]);

  return (
    <div className={ classes.PageNavigation }>
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
            pageTree.items.map((section): ReactElement => renderSection(section)) :
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
