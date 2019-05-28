ThemeProvider is a used to set the theme for nested compoents. It is required at the top level of your application. It can be nested so that one part of your component tree can have a different theme than other parts of your application.

```jsx
import { Application, Button, Brand, Dropdown, Headline, Icon, Product, Link, Sidebar, ThemeProvider, themes, View } from 'thenativeweb-ux';

<div style={{ position: 'relative', width: 640, height: 480 }}>
  <ThemeProvider theme={ themes.wolkenkit }>
    <Application>
      <Sidebar>
        <Sidebar.Brand><Product name='my-app' /></Sidebar.Brand>
        <Sidebar.Item iconName='account'>
          <Sidebar.Item>You are logged in as Sophie</Sidebar.Item>
          <Sidebar.Item onClick={ () => console.log('Clicked') }>Logout</Sidebar.Item>
        </Sidebar.Item>
        <Sidebar.Item iconName='help' isActive={ true } />
        <Sidebar.Item iconName='help' onClick={ () => console.log('Clicked') } />
        <Sidebar.Footer>
          <Link href='https://www.thenativeweb.io'>
            <Brand type='minimal' color='monochrome' isInteractive={ true } />
          </Link>
        </Sidebar.Footer>
      </Sidebar>
      <View adjust='flex' style={{ padding: '20px', border: '#eee solid 1px' }}>
        <Headline>An wolkenkit themed application</Headline>
        <Button onClick={ () => console.log('clicked') }>Click me!</Button>
        <Dropdown options={[ { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' } ]} value={ 'bar' } onChange={ () => {}} />
        <Link>This is a link</Link>
        <div>
          This is an icon… <Icon name='heart' color='highlight' />
        </div>
      </View>
    </Application>
  </ThemeProvider>
</div>
```
