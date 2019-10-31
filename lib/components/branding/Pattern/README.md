The `Pattern` component can be used to add a pattern to a container. The pattern will be positioned absolute inside the parent container.

```jsx
import { Container, ThemeProvider, themes } from 'thenativeweb-ux';
<div>
  <Container background='dark' style={{ height: '200px' }}>
    <Pattern />
    <div>This content is above the pattern…</div>
  </Container>
  <hr/>
  <ThemeProvider theme={ themes.wolkenkit }>
    <Container orientation='centered' background='dark' style={{ height: '200px' }}>
      <Pattern />
      <div>This content is above the pattern…</div>
    </Container>
  </ThemeProvider>
</div>
```
