import {
  Application,
  Button,
  Container,
  Product,
  Sidebar,
  SidebarBrand
} from '../../../../../../lib';
import React, { ReactElement } from 'react';

const log = function (msg: any): void {
  /* eslint-disable no-console */
  console.log(msg);
  /* eslint-enable no-console */
};

export default (): ReactElement => (
  <Application>
    <Sidebar id='sidebar'>
      <SidebarBrand><Product /></SidebarBrand>
    </Sidebar>
    <Container isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
      <div>
        <Button id='button' onClick={ (): void => log('button::clicked') }>Click me</Button>
      </div>
    </Container>
  </Application>
);
