import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Application, Brand, Container, Headline, notifications, Paragraph, Product, Sidebar, SidebarBrand, SidebarFooter, SidebarItem } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Sidebar</Headline>

    <Paragraph>
      The <code>Sidebar</code> should be used to handle navigation when
      building an application layout using
      the <code>Application</code> component. Its also responsible for
      applying a consistent branding across the native web applications.
    </Paragraph>

    <ComponentPreview>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Application useNotifications={ false } useDialogs={ false }>
          <Sidebar>
            <SidebarBrand><Product name='my-app' /></SidebarBrand>
            <SidebarItem iconName='account'>
              <SidebarItem>You are logged in as Sophie</SidebarItem>
              <SidebarItem onClick={ (): void => notifications.show({ type: 'success', text: 'onClick: Logout' }) }>Logout</SidebarItem>
            </SidebarItem>
            <SidebarItem iconName='menu' isActive={ true } />
            <SidebarItem iconName='help' onClick={ (): void => notifications.show({ type: 'success', text: 'onClick: help' }) } />
            <SidebarFooter><Brand type='minimal' color='monochrome' /></SidebarFooter>
          </Sidebar>
          <Container background='light'>My content panel</Container>
        </Application>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
