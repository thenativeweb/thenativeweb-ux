import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Code, Headline, Link, PageNavigation, PageTree, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => {
  const pageTree = new PageTree({
    items: [
      {
        title: 'First Section',
        children: [
          {
            title: 'First chapter',
            children: [
              { title: 'Page A' },
              { title: 'Page B' }
            ]
          },
          {
            title: 'Second chapter',
            children: [
              { title: 'Page C' },
              { title: 'Page D' }
            ]
          }
        ]
      },
      {
        title: 'Second Section',
        children: [
          { title: 'Page E' }
        ]
      }
    ]
  });

  return (
    <React.Fragment>
      <Headline>PageNavigation</Headline>

      <Paragraph>
        A <code>PageNavigation</code> can be used to display a hierarchy
        of pages inside an application. It accepts a <code>PageTree</code> structure
        as its data source and will build a collapsible tree navigation from it.
        It generates a <Link href='https://nextjs.org/docs/api-reference/next/link'>next/link</Link> for
        each page using the slugified title.
      </Paragraph>

      <Paragraph>
        First create a new <code>PageTree</code> and
        provide <code>items</code> that with a <code>title</code>,
        and <code>children</code>.
      </Paragraph>

      <Code>{`
        const pageTree = new PageTree({
          items: [
            {
              title: 'First Section',
              children: [
                {
                  title: 'First chapter',
                  children: [
                    { title: 'Page A' },
                    { title: 'Page B' }
                  ]
                },
                {
                  title: 'Second chapter',
                  children: [
                    { title: 'Page C' },
                    { title: 'Page D' }
                  ]
                }
              ]
            },
            {
              title: 'Second Section',
              children: [
                { title: 'Page E' }
              ]
            }
          ]
        });
      `}
      </Code>

      <Paragraph>
        A <code>PageTree</code> consists of <code>PageTreeItems</code> which
        follow the following interface:
      </Paragraph>

      <Code language='typescript'>{`
        interface PageTreeItem {
          title: string;
          keywords?: string [];
          children?: PageTreeItem [];
        }
      `}
      </Code>

      <Paragraph>
        Pass this <code>pageTree</code> to the PageNavigation component.
      </Paragraph>

      <ComponentPreview>
        <PageNavigation
          pageTree={ pageTree }
          activePath=''
        />
      </ComponentPreview>

      <Headline level='2'>Setting the active path</Headline>

      <Paragraph>
        Use the <code>activePath</code> property to define the active page
        within your tree. The path to this page will be expanded automatically.
        Once this property changes, all paths that have been expanded by the
        user will be closed automatically. If you are using this component
        from within a Next.js application, you get
        the <code>activePath</code> using the <code>asPath</code> property of
        the <Link href='https://nextjs.org/docs/api-reference/next/router'>next/router</Link>.
      </Paragraph>

      <ComponentPreview>
        <PageNavigation
          pageTree={ pageTree }
          activePath='/first-section/first-chapter/page-a'
        />
      </ComponentPreview>

      <Headline level='2'>Searching for pages</Headline>

      <Paragraph>
        A search bar can be enabled to quickly search inside a page tree. This
        search will use the <code>pageTree</code> as data source and query
        title, keywords and the breadcrumbs of a page.
      </Paragraph>

      <ComponentPreview>
        <PageNavigation
          showSearchBar={ true }
          pageTree={ pageTree }
          activePath='/first-section/first-chapter/page-a'
        />
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
