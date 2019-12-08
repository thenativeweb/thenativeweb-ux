import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Container, Headline, Paragraph, PoweredBy } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>PoweredBy</Headline>

    <Paragraph>
      The <code>PoweredBy</code> component informs about the company or the
      product that powers the current application.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <Container background='dark'>
        <PoweredBy />
      </Container>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
