import Link from 'next/link';
import {
  Application,
  Container,
  Headline,
  Product,
  services,
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
        <SidebarItem onClick={ (): void => services.notifications.show({ type: 'success', text: 'You clicked!' }) }>Logout</SidebarItem>
      </SidebarItem>
      <SidebarItem iconName='help' isActive={ true } />
      <Link href='/second'><SidebarItem iconName='help' /></Link>
    </Sidebar>
    <Container id='index-page' isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
      <div>
        <Headline id='headline'>Universally rendered Next.js app</Headline>
        <Link href='/second'><a>Link to second page</a></Link>
        <Link href='/website'><a>Link to website</a></Link>
      </div>
    </Container>
  </Application>
);

export default Page;
