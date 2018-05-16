import React from 'react';
import { Application, Brand, Button, Icon, services, Sidebar, ThemeProvider, View } from '../../../dist';

const Page = () => (
  <ThemeProvider>
    <Application>
      <Application.Services />
      <Sidebar>
        <Sidebar.Brand><Brand.Product name='my-app' /></Sidebar.Brand>
        <Sidebar.Item iconName='account'>
          <Sidebar.Item>You are logged in as Sophie</Sidebar.Item>
          <Sidebar.Item onClick={ () => services.notifications.show({ type: 'success', text: 'You clicked!' }) }>Logout</Sidebar.Item>
        </Sidebar.Item>
        <Sidebar.Item iconName='help' isActive={ true } />
        <Sidebar.Item iconName='help' onClick={ () => services.notifications.show({ type: 'success', text: 'You clicked!' }) } />
      </Sidebar>
      <View adjust='flex' style={{ padding: '20px', border: '#eee solid 1px' }}>
        <Button onClick={ () => services.notifications.show({ type: 'success', text: 'You clicked!' }) }>Click me!</Button>
        <div>
          This is an icon… <Icon name='heart' color='highlight' />
        </div>
      </View>
    </Application>
  </ThemeProvider>
);

export default Page;
