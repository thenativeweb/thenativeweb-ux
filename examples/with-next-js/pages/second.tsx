import Link from 'next/link';
import {
  Application,
  ApplicationServices,
  Product,
  services,
  Sidebar,
  SidebarBrand,
  SidebarItem,
  View
} from '../../../lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <Application>
    <ApplicationServices />
    <Sidebar>
      <SidebarBrand><Product name='App' /></SidebarBrand>
      <SidebarItem iconName='account'>
        <SidebarItem>You are logged in as Sophie</SidebarItem>
        <SidebarItem onClick={ (): void => services.notifications.show('success', 'You clicked!') }>Logout</SidebarItem>
      </SidebarItem>
      <Link href='/'><SidebarItem iconName='help' /></Link>
      <SidebarItem iconName='help' isActive={ true } />
    </Sidebar>
    <View id='second-page' adjust='flex' style={{ padding: '20px' }}>
      This page is also rendered universally.
    </View>
  </Application>
);

export default Page;
