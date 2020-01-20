import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph, Text } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Text</Headline>

    <Paragraph>
      Whenever you would like to display text inside your application, use
      the <code>Text</code> component as it applies consistent font styling.
    </Paragraph>

    <ComponentPreview>
      <React.Fragment>
        <Text>This is medium text</Text>
        <Text size='sm'>This is small text</Text>
      </React.Fragment>
    </ComponentPreview>

    <Paragraph>
      The component also ensures that text will be abbreviated, if the parent
      component does not hold enough space:
    </Paragraph>

    <ComponentPreview>
      <div style={{ width: 100, overflow: 'hidden' }}>
        <Text>
          This text will be abbreviated.
        </Text>
      </div>
    </ComponentPreview>

    <Paragraph>
      This means by default text will not be wrapped into new lines. To change
      this default behaviour set the <code>breakLines</code> option
      to <code>true</code>.
    </Paragraph>

    <ComponentPreview>
      <div style={{ width: 100, overflow: 'hidden' }}>
        <Text breakLines={ true }>
          This text will be broken into several lines.
        </Text>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
