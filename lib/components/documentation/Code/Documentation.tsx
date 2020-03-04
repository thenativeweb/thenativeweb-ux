import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../documentation/Property';
import { Code, Headline, Paragraph } from '../../..';
import React, { Fragment, ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Code</Headline>

    <Paragraph>
      The <code>Code</code> component is used to highlight the syntax of
      a code block. It accepts a string as children and strips of its
      indentation.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <Code>{`
        const message = 'This is JavaScript code!';

        console.log(message);
      `}
      </Code>
    </ComponentPreview>

    <Headline level='2'>Languages</Headline>

    <Paragraph>
      Besides the default `language` JavaScript the component also renders
      TypeScript, JSX and TSX.
    </Paragraph>

    <ComponentPreview>
      <Fragment>
        <Property name='language' value='typescript' />
        <Code language='typescript'>{`
          const message: string = 'This is TypeScript code!';

          console.log(message);
        `}
        </Code>

        <Property name='language' value='shell' />

        <Code language='shell'>{`
          # This is a comment
          $ npm run install
        `}
        </Code>

        <hr />

        <Property name='language' value='tsx' />
        <Code language='tsx'>{`
          const Component = (): ReactElement => <div></div>;
        `}
        </Code>

        <hr />

        <Property name='language' value='jsx' />
        <Code language='jsx'>{`
          const Component = () => <div></div>;
        `}
        </Code>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Inline</Headline>

    <Paragraph>
      Code can also be rendered inline in a Paragraph.
    </Paragraph>

    <ComponentPreview>
      <Paragraph>
        This block contains an inline <Code type='inline'>variableName</Code>.
      </Paragraph>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
