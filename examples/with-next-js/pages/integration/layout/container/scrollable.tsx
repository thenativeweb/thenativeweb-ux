import {
  Application,
  Container
} from '../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <Application>
    <div id='sidebar' />
    <Container id='container' vertical='center' horizontal='center' isScrollable={ true }>
      <div style={{ background: 'gold', width: 400 }}>
        <div style={{ background: 'gold', height: 20 }}>I am very large so my parent is scrollable.</div>
        <div style={{ background: 'gold', height: 400 }} />
        <div style={{ background: 'gold', height: 20 }}>This is the end.</div>
      </div>
    </Container>
  </Application>
);
