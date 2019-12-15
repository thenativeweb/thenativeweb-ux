import {
  Code,
  Headline,
  Paragraph
} from '../../lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <React.Fragment>
    <Headline>thenativeweb-ux</Headline>
    <Paragraph>
      thenativeweb-ux provides UI components for the native web applications.
    </Paragraph>

    <Headline level='2'>Quick start</Headline>

    <Paragraph>
      First you need to add a reference to your application. For a minimum
      setup, you have to reference the two root
      components <code>Application</code> and <code>ThemeProvider</code>:
    </Paragraph>

    <Code language='tsx'>{`
      import { Application, ThemeProvider } from 'thenativeweb-ux';
    `}
    </Code>

    <Paragraph>
      Then, inside your application&apos;s <code>render</code> function, setup
      the basic structure by wrapping the <code>Application</code> component
      inside a <code>ThemeProvider</code>.:
    </Paragraph>

    <Code language='tsx'>{`
      <ThemeProvider>
        <Application>
          {
            // ...
          }
        </Application>
      </ThemeProvider>
    `}
    </Code>

    <Paragraph>
      By default, the <code>ThemeProvider</code> will create
      a <i>the native web</i> theme. The following themes are
      available: <code>thenativeweb</code> and <code>wolkenkit</code>.
    </Paragraph>

    <Headline level='2'>Using components</Headline>

    <Paragraph>
      Besides setting up the application itself, you may also use a variety of
      components. To use a component, you need to add a reference to it.
      E.g., to use the <code>Button</code> component, add the following
      line to your code:
    </Paragraph>

    <Code language='tsx'>{`
      import { Button } from 'thenativeweb-ux';
    `}
    </Code>
  </React.Fragment>
);

export default Page;
