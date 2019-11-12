import {
  Application,
  Product,
  Sidebar,
  SidebarBrand
} from '../../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <Application>
    <Sidebar id='sidebar'>
      <SidebarBrand><Product name='Sidebar' /></SidebarBrand>
    </Sidebar>
  </Application>
);
