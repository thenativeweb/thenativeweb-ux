import {
  Application,
  Container
} from '../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <Application>
    <div id='sidebar' />
    <Container id='container' vertical='center' horizontal='center' isScrollable={ false } style={{ width: 600, height: 300 }}>
      <div style={{ background: 'gold', width: 400 }}>
        <div id='visible-child' style={{ background: 'red', height: 20 }} />
        <div style={{ background: 'gold', height: 400 }} />
        <div id='invisible-child' style={{ background: 'green', height: 20 }} />
      </div>
    </Container>
  </Application>
);
