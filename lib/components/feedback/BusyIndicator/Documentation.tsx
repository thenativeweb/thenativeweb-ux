import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { BusyIndicator, Container, Headline, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>BusyIndicator</Headline>

    <Paragraph>
      The <code>BusyIndicator</code> component is used to inform the user about
      the application doing work and being busy.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <Container background='dark'>
        <BusyIndicator />
      </Container>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
