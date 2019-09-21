The `Sidebar` should be used to handle navigation when building an application layout using the `Application` component. Its also responsible for applying a consistent branding across the native web applications.

```jsx
import { Application, Brand, Product, View } from 'thenativeweb-ux';

<div style={{ position:'relative', width: 640, height: 480 }}>
  <Application>
    <Sidebar>
      <Sidebar.Brand><Product name='my-app' /></Sidebar.Brand>
      <Sidebar.Item iconName='account'>
        <Sidebar.Item>You are logged in as Sophie</Sidebar.Item>
        <Sidebar.Item onClick={ () => console.log('Clicked') }>Logout</Sidebar.Item>
      </Sidebar.Item>
      <Sidebar.Item iconName='help' isActive={ true } />
      <Sidebar.Item iconName='help' onClick={ () => console.log('Clicked') } />
      <Sidebar.Footer><Brand type='minimal' color='monochrome' /></Sidebar.Footer>
    </Sidebar>
    <View adjust='flex' background='light'>My content panel</View>
  </Application>
</div>
```
