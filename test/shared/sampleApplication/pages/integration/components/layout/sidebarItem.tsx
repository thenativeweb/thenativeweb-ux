import {
  Application,
  Product,
  Sidebar,
  SidebarBrand,
  SidebarItem
} from '../../../../../../../lib';
import React, { ReactElement } from 'react';

const log = function (msg: any): void {
  /* eslint-disable no-console */
  console.log(msg);
  /* eslint-enable no-console */
};

export default (): ReactElement => (
  <Application>
    <Sidebar>
      <SidebarBrand><Product name='Sidebar Item' /></SidebarBrand>
      <SidebarItem iconName='account' id='sidebar-item-account'>
        <SidebarItem>
          Authenticated as (anonymous)
        </SidebarItem>
        <SidebarItem id='sidebar-item-logout' onClick={ (): void => log('clicked::clicked::logout') }>
          Logout
        </SidebarItem>
      </SidebarItem>
    </Sidebar>
  </Application>
);
