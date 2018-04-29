ThemeProvider is a component that can be used to set the theme for nested compoents. Use it at the toplevel

```js
const wolkenkit = require('../../themes/wolkenkit').default;
<ThemeProvider theme={ wolkenkit }>
  <Button onClick={ () => alert('clicked') }>Click me!</Button>
</ThemeProvider>
```
