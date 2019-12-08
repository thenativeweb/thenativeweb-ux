import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Application, Brand, Container, Headline, notifications, Paragraph, Product, Sidebar, SidebarBrand, SidebarFooter, SidebarItem } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Sidebar</Headline>

    <Paragraph>
      The <code>Sidebar</code> should be used to handle navigation when
      building an application layout using
      the <code>Application</code> component. It&apos;s also responsible for
      applying a consistent branding across the native web applications.
    </Paragraph>

    <ComponentPreview>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Application useNotifications={ false } useDialogs={ false }>
          <Sidebar>
            <SidebarBrand><Product name='my-app' /></SidebarBrand>
          </Sidebar>
          <Container background='light'>My content panel</Container>
        </Application>
      </div>
    </ComponentPreview>

    <Headline>Items</Headline>

    <Paragraph>
      Add items to the sidebar using the <code>SidebarItem</code> component.
      An item is either a top level item that can be actived, e.g. a help item
      that activates the help mode. Or it is a container for nested items, e.g.
      an account item that contains a logout item.
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
          </Sidebar>
        </Application>
      </div>
    </ComponentPreview>

    <Headline>Footer</Headline>

    <Paragraph>
      A sidebar can also contain a <code>SidebarFooter</code>. Use it to display
      and link to the brand that created the product.
    </Paragraph>

    <ComponentPreview>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Application useNotifications={ false } useDialogs={ false }>
          <Sidebar>
            <SidebarBrand><Product name='my-app' /></SidebarBrand>
            <SidebarFooter><Brand type='minimal' color='monochrome' /></SidebarFooter>
          </Sidebar>
        </Application>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
