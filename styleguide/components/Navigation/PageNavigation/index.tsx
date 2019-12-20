import { Chapter } from '../Chapter';
import { Page } from '../Page';
import { PageSearch } from '../PageSearch';
import { Section } from '../Section';
import {
  createUseStyles, PageTree, PageTreeItem
} from '../../../../lib';
import { PageNavigationClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

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

const useStyles = createUseStyles<PageNavigationClassNames>(styles);

const PageNavigation: FunctionComponent<PageNavigationProps> = ({ pageTree }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.PageNavigation }>
      <PageSearch pageTree={ pageTree } />
      {
        pageTree.items.map((section): ReactElement => renderSection(section))
      }
    </div>
  );
};

export { PageNavigation };
