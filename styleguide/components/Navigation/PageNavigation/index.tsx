import { Chapter } from '../Chapter';
import {
  createUseStyles
} from '../../../../lib';
import { Page } from '../Page';
import { Section } from '../Section';
import { PageNavigationClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface Item {
  title: string;
  keywords?: undefined | string [];
  children?: Item [];
}

interface Section {
  title: string; children: Item [];
}

type PageTree = Section[];

const renderChapterOrPages = (item: Item): ReactElement => {
  if (item.children) {
    return (
      <Chapter title={ item.title } key={ item.title }>
        {
          item.children.map((page: Item): ReactElement => (
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

const renderSection = (section: Section): ReactElement => (
  <Section title={ section.title } key={ section.title }>
    {
      section.children.map((chapterOrPage): ReactElement => renderChapterOrPages(chapterOrPage))
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
      {
        pageTree.map((section): ReactElement => renderSection(section))
      }
    </div>
  );
};

export { PageNavigation };
