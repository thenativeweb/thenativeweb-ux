The `Product` component displays a product's brand. To use it, provide the product's name using the `name` property. Additionally, you may set a `size` as explained previously.

```jsx
import { Container, ThemeProvider, themes } from 'thenativeweb-ux';

<div>
  <Container background='dark'>
    <Product name='console' />
  </Container>
  <hr />
  <Container background='dark'>
    <Product name='console' size='lg' />
  </Container>
  <hr />
  <Container background='dark'>
    <Product name='console' size='xl' />
  </Container>
  <hr />
  <ThemeProvider theme={ themes.wolkenkit }>
    <Container background='dark'>
      <Product name='console' />
    </Container>
    <hr />
    <Container background='dark'>
      <Product name='wolkenkit' size='lg'  />
    </Container>
    <hr />
    <Container background='dark'>
      <Product name='wolkenkit' size='xl' isAnimated={ true }  />
    </Container>
    <hr />
    <Container background='dark'>
      <Product name='wolkenkit' type='logo-only' />
    </Container>
    <hr />
    <Container background='dark'>
      <Product name='wolkenkit' type='text-only' />
    </Container>
  </ThemeProvider>
</div>
```
