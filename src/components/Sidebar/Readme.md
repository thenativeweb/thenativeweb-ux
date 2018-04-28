The `Sidebar` should be used to handle navigation when building an application layout using the `Application` component. Its also responsible for applying a consistent branding across the native web applications.

```js
<div style={{ position:'relative', width: 640, height: 480 }}>
  <Application>
    <Sidebar>
      <Sidebar.Brand><Brand size='s' suffix='my-app' /></Sidebar.Brand>
      <Sidebar.Item iconName='account'>
        <Sidebar.Item>You are logged in as Sophie</Sidebar.Item>
        <Sidebar.Item onClick={ () => console.log('Clicked') }>Logout</Sidebar.Item>
      </Sidebar.Item>
      <Sidebar.Item iconName='help' isActive={ true } />
      <Sidebar.Item iconName='help' onClick={ () => console.log('Clicked') } />
    </Sidebar>
    <View adjust='flex' style={{ background: 'lightgrey' }}>My content panel</View>
  </Application>
</div>
```
