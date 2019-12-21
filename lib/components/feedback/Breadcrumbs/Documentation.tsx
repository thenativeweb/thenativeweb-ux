import { ComponentPreview } from '../../documentation/ComponentPreview';
import { Breadcrumbs, Headline, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Breadcrumbs</Headline>

    <Paragraph>
      Use <code>Breadcrumbs</code> to display the path of a current page or
      view inside an application.
    </Paragraph>

    <ComponentPreview>
      <Breadcrumbs items={ [ 'First level', 'Second level', 'Third level' ] } />
    </ComponentPreview>

    <Headline level='2'>Highlight search words</Headline>

    <Paragraph>
      Use the <code>searchWords</code> property to highlight several words
      inside the breadcrumbs.
    </Paragraph>

    <ComponentPreview>
      <Breadcrumbs
        items={ [ 'First level', 'Second level', 'Third level' ] }
        searchWords={ [ 'second' ] }
      />
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
