The `Application` component acts as your application root, and it provides a layout based on flexbox. It will make sure the most basic things are available to you, like fonts and icons.

As it represents the application root, it positions itself absolutely in its parent element, so make sure to set the parent's `position` property to `relative`. Also, this means that any scrolling is disabled, since you don't typically want to have this at the root-level. If you need any parts of the UI to scroll, use a `View` component instead.

Always remember to also use the `Application.Services` component as first child of your `Application` component. Otherwise, some things may not work as expected.

```js
<div style={{ position: 'relative', width: 640, height: 480 }}>
  <Application>
    <View background='dark'>Sidebar view</View>
    <View background='light' adjust='flex'>Content view</View>
  </Application>
</div>
```
