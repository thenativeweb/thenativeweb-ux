import {
  Container
} from '../../../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <div>
    <Container id='container' vertical='center' horizontal='center' isScrollable={ false } style={{ width: 600, height: 300 }}>
      <div style={{ width: 400 }}>
        <div id='visible-child' style={{ background: 'deeppink', height: 20 }} />
        <div style={{ background: 'gray', height: 400 }} />
        <div id='invisible-child' style={{ background: 'deeppink', height: 20 }} />
      </div>
    </Container>
  </div>
);
