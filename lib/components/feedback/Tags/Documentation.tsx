import { ComponentPreview } from '../../documentation/ComponentPreview';
import { Headline, Paragraph, Tags } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Tags</Headline>

    <Paragraph>
      Use <code>Tags</code> to list groups of strings.
    </Paragraph>

    <ComponentPreview>
      <Tags items={ [ 'foo', 'bar', 'baz' ] } />
    </ComponentPreview>

    <Headline level='2'>Highlight search words</Headline>

    <Paragraph>
      Use the <code>searchWords</code> property to highlight several words
      inside the tags.
    </Paragraph>

    <ComponentPreview>
      <Tags items={ [ 'foo', 'bar', 'baz' ] } searchWords={ [ 'ba' ] } />
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
