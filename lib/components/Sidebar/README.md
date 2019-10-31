The `Sidebar` should be used to handle navigation when building an application layout using the `Application` component. Its also responsible for applying a consistent branding across the native web applications.

```jsx
import { Application, Brand, Container, Product, Sidebar, SidebarBrand, SidebarItem, SidebarFooter } from 'thenativeweb-ux';

<div style={{ position:'relative', width: 640, height: 480 }}>
  <Application useNotification={ false } useDialogs={ false }>
    <Sidebar>
      <SidebarBrand><Product name='my-app' /></SidebarBrand>
      <SidebarItem iconName='account'>
        <SidebarItem>You are logged in as Sophie</SidebarItem>
        <SidebarItem onClick={ () => console.log('Clicked') }>Logout</SidebarItem>
      </SidebarItem>
      <SidebarItem iconName='help' isActive={ true } />
      <SidebarItem iconName='help' onClick={ () => console.log('Clicked') } />
      <SidebarFooter><Brand type='minimal' color='monochrome' /></SidebarFooter>
    </Sidebar>
    <Container background='gray'>My content panel</Container>
  </Application>
</div>
```
