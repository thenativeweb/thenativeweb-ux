The `Pattern` component can be used to add a pattern to a block element. The pattern will be positioned absolute inside the parent, so make sure to set it's position to relative.

```jsx
import { ThemeProvider, themes } from 'thenativeweb-ux';
<div>
  <div style={{ position: 'relative', background: 'black', height: '200px' }}>
    <Pattern />
  </div>
  <hr/>
  <ThemeProvider theme={ themes.Wolkenkit }>
    <div style={{ position: 'relative', background: 'black', height: '200px' }}>
      <Pattern />
    </div>
  </ThemeProvider>
</div>
```
