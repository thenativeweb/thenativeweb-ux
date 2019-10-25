ThemeProvider is a used to set the theme for nested compoents. It is required at the top level of your application. It can be nested so that one part of your component tree can have a different theme than other parts of your application.

```jsx
import {
  Application,
  Button,
  Brand,
  Container,
  Dropdown,
  Headline,
  Icon,
  Product,
  Link,
  Sidebar,
  SidebarBrand,
  SidebarItem,
  ThemeProvider,
  SidebarFooter,
  themes
} from 'thenativeweb-ux';

<div style={{ position: 'relative', width: 640, height: 480 }}>
  <ThemeProvider theme={ themes.wolkenkit }>
    <Application useNotification={ false } useDialogs={ false }>
      <Sidebar>
        <SidebarBrand><Product name='my-app' /></SidebarBrand>
        <SidebarItem iconName='account'>
          <SidebarItem>You are logged in as Sophie</SidebarItem>
          <SidebarItem onClick={ () => console.log('Clicked') }>Logout</SidebarItem>
        </SidebarItem>
        <SidebarItem iconName='help' isActive={ true } />
        <SidebarItem iconName='help' onClick={ () => console.log('Clicked') } />
        <SidebarFooter>
          <Link href='https://www.thenativeweb.io'>
            <Brand type='minimal' color='monochrome' isInteractive={ true } />
          </Link>
        </SidebarFooter>
      </Sidebar>
      <div style={{ padding: '20px', border: '#eee solid 1px' }}>
        <Headline>An wolkenkit themed application</Headline>
        <Button onClick={ () => console.log('clicked') }>Click me!</Button>
        <Dropdown options={[ { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' } ]} value={ 'bar' } onChange={ () => {}} />
        <Link>This is a link</Link>
        <div>
          This is an icon… <Icon name='heart' color='highlight' />
        </div>
      </div>
    </Application>
  </ThemeProvider>
</div>
```
