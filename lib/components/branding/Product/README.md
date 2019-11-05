The `Product` component displays a product's brand. To use it, provide the product's name using the `name` property. Additionally, you may set a `size` as explained previously.

```jsx
import { Container, ThemeProvider, themes } from 'thenativeweb-ux';

<div>
  <div style={{ background: 'rgb(34, 34, 34)'}}>
    <Product name='console' />
    <hr />
    <Product name='console' size='lg' />
    <hr />
    <Product name='console' size='xl' />
  </div>
  <hr />
  <ThemeProvider theme={ themes.wolkenkit }>
    <div style={{ background: 'rgb(47, 51, 59)'}}>
      <Product name='console' />
      <hr />
      <Product name='wolkenkit' size='lg'  />
      <hr />
      <Product name='wolkenkit' size='xl' isAnimated={ true }  />
      <hr />
      <Product name='wolkenkit' type='logo-only' />
      <hr />
      <Product name='wolkenkit' type='text-only' />
    </div>
  </ThemeProvider>
</div>
```
