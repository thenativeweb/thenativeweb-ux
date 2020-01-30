import {
  Code,
  Headline,
  Paragraph
} from '.';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>thenativeweb-ux</Headline>
    <Paragraph>
      thenativeweb-ux provides UI components for the native web applications.
    </Paragraph>

    <Headline level='2'>Quick start</Headline>

    <Paragraph>
      First you need to install the module. <code>thenativeweb-ux</code> builds
      upon <code>React</code> and <code>Next.js</code>, so make sure to install
      them as well.
    </Paragraph>

    <Code language='shell'>{`
      npm install thenativeweb-ux react react-dom next
    `}
    </Code>

    <Headline level='3'>Create a theme</Headline>

    <Paragraph>
      To style your application, you need to create a theme:
    </Paragraph>

    <Code language='shell'>{`
      touch theme.ts
    `}
    </Code>

    <Paragraph>
      In most of the cases you can just use one of the built-in themes:
    </Paragraph>

    <Code language='typescript' showLineNumbers={ true }>{`
      import { themes } from 'thenativeweb-ux';

      const theme = new themes.TheNativeWeb();

      export { theme };
    `}
    </Code>

    <Headline level='3'>Create a document</Headline>

    <Paragraph>
      To setup server side rendering of the critical styles for your application,
      create a custom <code>_document.ts</code>.
    </Paragraph>

    <Code language='shell'>{`
      mkdir pages
      touch pages/_document.ts
    `}
    </Code>

    <Paragraph>
      Import and extend the <code>NextDocument</code> component. Make sure to
      override its <code>getInitialProps</code> method. Use the
      static method <code>NextDocument.getInitialPropsWithTheme</code> to setup
      your theme:
    </Paragraph>

    <Code language='typescript' showLineNumbers={ true }>{`
      import { NextDocument } from 'thenativeweb-ux';
      import { theme } from '../theme';
      import { DocumentContext, DocumentInitialProps } from 'next/document';

      class CustomDocument extends NextDocument {
        public static async getInitialProps (originalContext: DocumentContext): Promise<DocumentInitialProps> {
          return NextDocument.getInitialPropsWithTheme(originalContext, theme);
        }
      }

      export default CustomDocument;
    `}
    </Code>

    <Headline level='3'>Create an app</Headline>

    <Paragraph>
      To remove server side styles once the application has been loaded on the
      client, create a custom <code>_app.ts</code>:
    </Paragraph>

    <Code language='shell'>{`
      touch pages/_app.ts
    `}
    </Code>

    <Paragraph>
      Import and extend the <code>NextApp</code> component. Override
      its <code>render</code> method. Use
      the <code>NextApp.renderWithTheme</code> to setup your theme properly.
      You can render any HTML here that you might need for your
      application.
    </Paragraph>

    <Code language='tsx' showLineNumbers={ true }>{`
      import { theme } from '../theme';
      import { NextApp, Website } from 'thenativeweb-ux';
      import React, { ReactElement } from 'react';

      class CustomApp extends NextApp {
        public render (): ReactElement {
          const { Component, pageProps } = this.props;

          return NextApp.renderWithTheme((
            <Website>
              <Component { ...pageProps } />
            </Website>
          ), theme);
        }
      }

      export default CustomApp;
    `}
    </Code>

    <Headline level='3'>Create your first page</Headline>

    <Paragraph>
      Add an index page to your application:
    </Paragraph>

    <Code language='shell'>{`
      touch pages/index.tsx
    `}
    </Code>

    <Paragraph>
      Besides setting up the page itself, you may also use a variety of
      components. To use a component, you need to add a reference to it.
      E.g., to use the <code>Headline</code> component, add the following
      line to your code:
    </Paragraph>

    <Code language='tsx' showLineNumbers={ true }>{`
      import React, { ReactElement, Fragment } from 'react';
      import { Paragraph, Headline } from 'thenativeweb-ux';

      export default (): ReactElement => (
        <Fragment>
          <Headline>Your first page</Headline>
          <Paragraph>Now go ahead and add more components…</Paragraph>
        </Fragment>
      );
    `}
    </Code>

    <Headline level='3'>Runing your application</Headline>

    <Paragraph>
      Finally, you can run your application using the <code>next</code> CLI:
    </Paragraph>

    <Code language='shell'>{`
      npx next dev
    `}
    </Code>
  </React.Fragment>
);

export { Documentation };
