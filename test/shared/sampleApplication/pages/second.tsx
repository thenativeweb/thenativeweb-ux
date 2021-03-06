import Link from 'next/link';
import {
  Application,
  Container,
  notifications,
  Product,
  Sidebar,
  SidebarBrand,
  SidebarItem
} from '../../../../lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <Application>
    <Sidebar>
      <SidebarBrand><Product name='App' /></SidebarBrand>
      <SidebarItem iconName='account'>
        <SidebarItem>You are logged in as Sophie</SidebarItem>
        <SidebarItem onClick={ (): void => notifications.show({ type: 'success', text: 'You clicked!' }) }>Logout</SidebarItem>
      </SidebarItem>
      <Link href='/'><SidebarItem iconName='help' /></Link>
      <SidebarItem iconName='help' isActive={ true } />
    </Sidebar>
    <Container id='second-page' isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
      This page is also rendered universally.
    </Container>
  </Application>
);

export default Page;
