import { ComponentPreview } from '../../documentation/ComponentPreview';
import { Headline, HighlightText, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>HighlightText</Headline>

    <Paragraph>
      Use the <code>HighlightText</code> component to highlight search words
      within a text.
    </Paragraph>

    <ComponentPreview>
      <HighlightText searchWords={ [ 'foo', 'bar', 'baz' ] }>
        This text will be highlighted: foo, bar, and baz.
      </HighlightText>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
