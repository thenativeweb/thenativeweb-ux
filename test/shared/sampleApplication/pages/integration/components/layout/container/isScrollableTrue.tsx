import {
  Container
} from '../../../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <div>
    <Container id='container' vertical='center' horizontal='center' isScrollable={ true }>
      <div style={{ width: 400 }}>
        <div style={{ background: 'deeppink', height: 20 }} />
        <div style={{ background: 'gray', height: 400 }} />
        <div style={{ background: 'deeppink', height: 20 }} />
      </div>
    </Container>
  </div>
);
