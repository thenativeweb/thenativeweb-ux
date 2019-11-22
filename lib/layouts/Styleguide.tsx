import {
  Application,
  Container,
  Product,
  Sidebar,
  SidebarBrand
} from '..';
import React, { FunctionComponent, ReactElement } from 'react';

const Styleguide: FunctionComponent = ({ children }): ReactElement => (
  <Application>
    <Sidebar>
      <SidebarBrand><Product name='ux' /></SidebarBrand>
    </Sidebar>
    <Container isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
      <div>
        { children }
      </div>
    </Container>
  </Application>
);

export { Styleguide };
