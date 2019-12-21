import { Chapter } from './Chapter';
import { Page } from './Page';
import { SearchResults } from './SearchResults';
import { Section } from './Section';
import {
  createUseStyles, Icon, PageTree, PageTreeItem, TextBox, Theme
} from '../../../../lib';
import { PageNavigationClassNames, styles } from './styles';
import React, { ChangeEvent, FunctionComponent, ReactElement, useState } from 'react';

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
  pageTree: PageTree;
}
const PageNavigation: FunctionComponent<PageNavigationProps> = ({ pageTree }): ReactElement => {
  const classes = useStyles();

  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState<PageTreeItem []>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newQuery = event.target.value;
    const newResults = pageTree.search(newQuery);

    setQuery(newQuery);
    setResults(newResults);
  };

  return (
    <div className={ classes.PageNavigation }>
      <div className={ classes.SearchBar }>
        <Icon
          className={ classes.SearchIcon }
          name='search'
          size='sm'
        />
        <TextBox
          className={ classes.SearchField }
          value={ query }
          placeholder='Search…'
          type='search'
          onChange={ handleChange }
        />
      </div>

      <div className={ classes.Content }>
        {
          query.length === 0 ?
            pageTree.items.map((section): ReactElement => renderSection(section)) :
            null
        }
        {
          query.length > 0 ?
            (
              <SearchResults query={ query } results={ results } />
            ) : null
        }
      </div>
    </div>
  );
};

export { PageNavigation };
