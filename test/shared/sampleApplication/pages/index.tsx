import Link from 'next/link';
import {
  Application,
  Container,
  Headline,
  Product,
  Sidebar,
  SidebarBrand,
  SidebarItem
} from '../../../../lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <Application>
    <Sidebar>
      <SidebarBrand><Product name='Sample' /></SidebarBrand>
      <Link href='/second'><SidebarItem iconName='help' /></Link>
    </Sidebar>
    <Container id='index-page' isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
      <div>
        <Headline id='headline'>Universally rendered Next.js app</Headline>
        <Link href='/second'><a>Link to second page</a></Link>
      </div>
    </Container>
  </Application>
);

export default Page;
