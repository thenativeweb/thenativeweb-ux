import Link from 'next/link';
import React from 'react';
import {
  Application,
  Product,
  services,
  Sidebar,
  View
} from 'thenativeweb-ux';

const Page = () => (
  <Application>
    <Application.Services />
    <Sidebar>
      <Sidebar.Brand><Product name='my-app' /></Sidebar.Brand>
      <Sidebar.Item iconName='account'>
        <Sidebar.Item>You are logged in as Sophie</Sidebar.Item>
        <Sidebar.Item onClick={ () => services.notifications.show({ type: 'success', text: 'You clicked!' }) }>Logout</Sidebar.Item>
      </Sidebar.Item>
      <Link href='/'><Sidebar.Item iconName='help' /></Link>
      <Sidebar.Item iconName='help' isActive={ true } />
    </Sidebar>
    <View id='second-page' adjust='flex' style={{ padding: '20px' }}>
      This page is also rendered universally.
    </View>
  </Application>
);

export default Page;
