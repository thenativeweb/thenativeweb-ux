The `Product` component displays a product's brand. To use it, provide the product's name using the `name` property. Additionally, you may set a `size` as explained previously.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';

<View>
  <View background='dark'>
    <Product name='console' />

    <hr />

    <Product name='console' size='lg' />

    <hr />

    <Product name='console' size='xl' />
  </View>

  <hr />

  <ThemeProvider theme='wolkenkit'>
    <View background='dark'>
      <Product name='console' />

      <hr />

      <Product name='wolkenkit' size='lg'  />

      <hr />

      <Product name='wolkenkit' size='xl' isAnimated={ true }  />

      <hr />

      <Product name='wolkenkit' type='logo-only' />

      <hr />

      <Product name='wolkenkit' type='typo-only' />
    </View>
  </ThemeProvider>
</View>
```
