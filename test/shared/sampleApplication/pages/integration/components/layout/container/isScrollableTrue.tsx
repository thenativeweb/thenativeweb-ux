import {
  Container
} from '../../../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <div>
    <Container id='container' vertical='center' horizontal='center' isScrollable={ true }>
      <div style={{ background: 'gold', width: 400 }}>
        <div style={{ background: 'red', height: 20 }} />
        <div style={{ background: 'gold', height: 400 }} />
        <div style={{ background: 'green', height: 20 }} />
      </div>
    </Container>
  </div>
);
