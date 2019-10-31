The `PoweredBy` component displays a teaser. Optionally, you may provide a product name using the `product` property.

```jsx
import { Container, ThemeProvider, themes } from 'thenativeweb-ux';
<div>
  <Container background='dark'>
    <PoweredBy />
  </Container>
  <hr/>
  <ThemeProvider theme={ themes.wolkenkit }>
    <Container background='dark'>
      <PoweredBy product='wolkenkit' />
    </Container>
  </ThemeProvider>
</div>
```
