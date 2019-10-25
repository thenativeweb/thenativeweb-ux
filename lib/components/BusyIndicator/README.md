The `BusyIndicator` component is used to inform the user about the application doing work and being busy.

```javascript
import { Container, ThemeProvider, themes } from 'thenativeweb-ux';

<div>
  <Container>
    <BusyIndicator />
  </Container>

  <Container background='dark'>
    <BusyIndicator />
  </Container>

  <ThemeProvider theme={ themes.wolkenkit}>
    <div>
      <Container orientation='centered'>
        <BusyIndicator />
      </Container>
      <Container background='dark' orientation='centered'>
        <BusyIndicator />
      </Container>
    </div>
  </ThemeProvider>
</div>
```
