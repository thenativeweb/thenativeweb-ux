import Link from 'next/link';
import {
  Application,
  ApplicationServices,
  Button,
  Headline,
  Product,
  services,
  Sidebar,
  SidebarBrand,
  SidebarItem,
  View
} from '../../../build/lib';
import React, { ReactElement } from 'react';

const log = function (message: any): void {
  /* eslint-disable no-console */
  console.log(message);
  /* eslint-enable no-console */
};

const Page = (): ReactElement => (
  <Application>
    <ApplicationServices />
    <Sidebar>
      <SidebarBrand><Product name='App' /></SidebarBrand>
      <SidebarItem iconName='account'>
        <SidebarItem>You are logged in as Sophie</SidebarItem>
        <SidebarItem onClick={ (): void => services.notifications.show({ type: 'success', text: 'You clicked!' }) }>Logout</SidebarItem>
      </SidebarItem>
      <SidebarItem iconName='help' isActive={ true } />
      <Link href='/second'><SidebarItem iconName='help' /></Link>
    </Sidebar>
    <View id='index-page' orientation='vertical' adjust='flex' style={{ padding: '20px' }}>
      <Headline id='headline'>Universally rendered Next.js app</Headline>
      <Link href='/second'><a>Link to second page</a></Link>
      <Link href='/website'><a>Link to website</a></Link>
      <Button id='button' onClick={ (): void => log('clicked::button') }>Click me</Button>
    </View>
  </Application>
);

export default Page;
