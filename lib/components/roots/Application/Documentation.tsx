import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Application, Container, Headline, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Application</Headline>
    <Paragraph>
      The <code>Application</code> component acts as your application root. It will make
      sure the most basic things like fonts are available to you.
    </Paragraph>
    <Paragraph>
      As it represents the application root, it positions itself absolutely in
      its parent element, so make sure to set the
      parent&apos;s <code>position</code> property to <code>relative</code>.
      Also, this means that any scrolling is disabled, since you don&apos;t
      typically want to have this at the root-level. If you need any parts
       of the UI to scroll, use a <code>Container</code> component.
    </Paragraph>
    <ComponentPreview>
      <div style={{ position: 'relative', width: '100%', height: 300, border: '1px solid black' }}>
        <Application>
          <Container background='dark'>Sidebar view</Container>
          <Container background='none'>Content view</Container>
        </Application>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
