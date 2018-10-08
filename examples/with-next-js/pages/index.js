import Link from 'next/link';
import React from 'react';
import {
  Application,
  Button,
  Product,
  services,
  Sidebar,
  ThemeProvider,
  View
} from '../../../dist';

const log = function (message) {
  /* eslint-disable no-console */
  console.log(message);
  /* eslint-enable no-console */
};

const Page = () => (
  <ThemeProvider>
    <Application>
      <Application.Services />
      <Sidebar>
        <Sidebar.Brand><Product name='App' /></Sidebar.Brand>
        <Sidebar.Item iconName='account'>
          <Sidebar.Item>You are logged in as Sophie</Sidebar.Item>
          <Sidebar.Item onClick={ () => services.notifications.show({ type: 'success', text: 'You clicked!' }) }>Logout</Sidebar.Item>
        </Sidebar.Item>
        <Sidebar.Item iconName='help' isActive={ true } />
        <Link href='/second'><Sidebar.Item iconName='help' /></Link>
      </Sidebar>
      <View adjust='flex' style={{ padding: '20px', border: '#eee solid 1px' }}>
        This page is rendered universally. <Link href='/second'><a>Link to second page</a></Link>
        <Button id='button' onClick={ () => log('clicked') }>Click me</Button>
      </View>
    </Application>
  </ThemeProvider>
);

export default Page;
