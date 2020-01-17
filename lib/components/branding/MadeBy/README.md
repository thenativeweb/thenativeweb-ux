The `MadeBy` component displays whom the application was developed by. Switch the `color` property to `light` if you would like to place it on a `light` background.

```jsx
import { Container } from 'thenativeweb-ux';

<div>
  <Container background='dark'>
    <MadeBy />
    <MadeBy size='md' />
    <MadeBy size='lg'/>
  </Container>

  <MadeBy color='light' />
  <MadeBy color='light' size='md' />
  <MadeBy color='light' size='lg' />
</div>
```

Optionally, you may provide a partner using the `partner` property.

```jsx
import { themes, ThemeProvider, Container } from 'thenativeweb-ux';

<div>
  <ThemeProvider theme={ themes.Wolkenkit }>
    <Container background='dark'>
      <MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
    </Container>
  </ThemeProvider>

  <MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}}  color='light' />
</div>
```
