import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph, Pattern } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Pattern</Headline>

    <Paragraph>
      The <code>Pattern</code> component can be used to add a pattern to a block
      element. The pattern will be positioned absolute inside the parent, so
      make sure to set it&apos;s position to relative.
    </Paragraph>

    <ComponentPreview useAllThemes={ true } background='dark'>
      <div style={{ position: 'relative', height: 120 }}>
        <Pattern />
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
