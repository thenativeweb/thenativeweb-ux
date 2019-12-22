import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Code, Headline, PageNavigation, PageTree, Paragraph } from '../../..';
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
              {
                title: 'First Section',
                children: [
                  { title: 'First page' },
                  { title: 'Second page' }
                ]
              }
            ]
          },
          {
            title: 'Second chapter',
            children: [
              {
                title: 'First Section',
                children: [
                  { title: 'First page' },
                  { title: 'Second page' }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Second Section',
        children: [
          { title: 'First chapter' }
        ]
      }
    ]
  });

  return (
    <React.Fragment>
      <Headline>PageNavigation</Headline>

      <Paragraph>
        A <code>PageNavigation</code> can be used show and display a hierarchy
        of pages inside a Next.js application. It accepts
        a <code>PageTree</code> structure as data source and will build a
        collapsible tree from it. It automatically generates Next.js links
        from the slugified title of each page and takes care of highlighting
        active pages.
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
                    {
                      title: 'First Section',
                      children: [
                        { title: 'First page' },
                        { title: 'Second page' }
                      ]
                    }
                  ]
                },
                {
                  title: 'Second chapter',
                  children: [
                    {
                      title: 'First Section',
                      children: [
                        { title: 'First page' },
                        { title: 'Second page' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Second Section',
              children: [
                { title: 'First chapter' }
              ]
            }
          ]
        });
      `}
      </Code>

      <Paragraph>
        Pass this <code>pageTree</code> to the PageNavigation component.
      </Paragraph>

      <ComponentPreview>
        <PageNavigation
          pageTree={ pageTree }
        />
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
