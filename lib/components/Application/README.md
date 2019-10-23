The `Application` component acts as your application root, and it provides a layout based on flexbox.  It will make sure the most basic things like fonts are available to you.

As it represents the application root, it positions itself absolutely in its parent element, so make sure to set the parent's `position` property to `relative`. Also, this means that any scrolling is disabled, since you don't typically want to have this at the root-level. If you need any parts of the UI to scroll, use a `View` component instead.

Always remember to also use the `ApplicationServices` component as first child of your `Application` component. Otherwise, some things may not work as expected.

```jsx
import { View } from 'thenativeweb-ux';

<div style={{ position: 'relative', width: '100%', height: 480 }}>
  <Application>
    <View background='light'>Sidebar view</View>
    <View background='dark' adaptSpaceOf='parent'>Content view</View>
  </Application>
</div>
```
