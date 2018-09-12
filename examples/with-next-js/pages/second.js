import Link from 'next/link';
import React from 'react';
import {
  Application,
  Product,
  services,
  Sidebar,
  ThemeProvider,
  View
} from '../../../dist';

const Page = () => (
  <ThemeProvider>
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
      <View adjust='flex' style={{ padding: '20px', border: '#eee solid 1px' }}>
        This page is also rendered universally.
      </View>
    </Application>
  </ThemeProvider>
);

export default Page;
