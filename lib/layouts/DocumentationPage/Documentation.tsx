import { Code, Headline, Link, Paragraph } from '../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>DocumentationPage</Headline>

    <Paragraph>
      Use this layout to render documentation sites that feature a tree
      navigation structure. It consists of a <Link href='/en-us/components/layout/sidebar'><code>SideBar</code></Link>,
      a <Link href='/en-us/components/navigation/pagenavigation'><code>PageNavigation</code></Link>, and
      a content panel.
    </Paragraph>

    <Headline level='2'>Responsive behaviour</Headline>

    <Paragraph>
      On <code>xs</code> screens, the content panel will fill the whole page and
      the <code>PageNavigation</code> will be rendered in a fullscreen container.
      A <Link href='/en-us/components/navigation/mobiletoggle'><code>MobileToggle</code></Link> can
      then be used to toggle this navigation.
    </Paragraph>

    <Headline level='2'>Defining the layout in a page</Headline>

    <Paragraph>
      Wrap your page within the layout and set the <code>navigation</code>, <code>productName</code>, <code>siteTitle</code>, and <code>yearOfCreation</code> properties.
      Additionally you can pass a <code>pageTitle</code> for each page.
    </Paragraph>

    <Code>{`
      const navigation: MultiLanguagePageTree = {
        'en-us': [
          {
            title: 'First Section',
            children: [
              { title: 'Page A' },
              { title: 'Page B' }
            ]
          }
        ]
      };

      // ...

      <DocumentationPage
        siteTitle='the native web UX'
        productName='ux'
        navigation={ navigation }
        yearOfCreation={ 2017 }
      >
        <div>My page content goes here</div>
      </DocumentationPage>
    `}
    </Code>
  </React.Fragment>
);

export { Documentation };
