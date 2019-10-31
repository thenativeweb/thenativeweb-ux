The `Application` component acts as your application root. It will make sure the most basic things like fonts are available to you.

As it represents the application root, it positions itself absolutely in its parent element, so make sure to set the parent's `position` property to `relative`. Also, this means that any scrolling is disabled, since you don't typically want to have this at the root-level. If you need any parts of the UI to scroll, use a `Container` component.

```jsx
import { Container } from 'thenativeweb-ux';

<div style={{ position: 'relative', width: '100%', height: 480 }}>
  <Application>
    <Container background='dark'>Sidebar view</Container>
    <Container background='white'>Content view</Container>
  </Application>
</div>
```
