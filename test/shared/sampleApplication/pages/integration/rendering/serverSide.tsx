import {
  Application,
  Container,
  Headline,
  Product,
  Sidebar,
  SidebarBrand
} from '../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <Application>
    <Sidebar id='sidebar'>
      <SidebarBrand><Product /></SidebarBrand>
    </Sidebar>
    <Container isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
      <div>
        <Headline id='headline' withPermalink={ false }>Server side rendered headline</Headline>
      </div>
    </Container>
  </Application>
);
