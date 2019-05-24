import Link from 'next/link';
import React from 'react';
import {
  Application,
  Button,
  Headline,
  Product,
  services,
  Sidebar,
  View
} from 'thenativeweb-ux';

const log = function (message) {
  /* eslint-disable no-console */
  console.log(message);
  /* eslint-enable no-console */
};

const Page = () => (
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
    <View id='index-page' orientation='vertical' adjust='flex' style={{ padding: '20px', border: '#eee solid 1px' }}>
      <Headline id='headline'>Universally rendered Next.js app</Headline>
      <Link href='/second'><a>Link to second page</a></Link>
      <Link href='/website'><a>Link to website</a></Link>
      <Button id='button' onClick={ () => log('clicked::button') }>Click me</Button>
    </View>
  </Application>
);

export default Page;
