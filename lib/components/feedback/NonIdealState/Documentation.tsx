import { ComponentPreview } from '../../documentation/ComponentPreview';
import { Headline, NonIdealState, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>NonIdealState</Headline>

    <Paragraph>
      Use the <code>NonIdealState</code> component to let the user know that a
      particular area within the application is not working as originally
      intended. Describe the cause of this condition and give quick tips on how
      to how to get out of it.
    </Paragraph>

    <ComponentPreview>
      <NonIdealState cause='Item could not been found'>
        <p>The item was not found within a reasonable amount of time.</p>
        <p>Just try it again.</p>
      </NonIdealState>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
