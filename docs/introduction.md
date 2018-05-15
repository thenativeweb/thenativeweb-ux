thenativeweb-ux provides UI components for the native web applications.

## Installation

```shell
$ npm install thenativeweb-ux
```

## Quick start

First you need to add a reference to your application. For the minimum setup, you have to reference the components `Application` and `ThemeProvider`, as shown in the following example:

```javascript static
import { Application, ThemeProvider } from 'thenativeweb-ux';
```

Then, inside your application's `render` function, you need to setup its basic structure. Using the `ThemeProvider`, you have to provide a theme you want to use for your application:

```jsx static
<ThemeProvider theme='thenativeweb'>
  <Application>
    <Application.Services />

    {
      // ...
    }
  </Application>
</ThemeProvider>
```

The currently available themes are listed in the following table. If you don't specify a theme, the theme `thenativeweb` is selected as default:

| Name | Description |
|-|-|
| `thenativeweb` | A theme for the native web applications. |
| `wolkenkit` | A theme for wolkenkit applications. |

### Using components

Afterwards, you can use any component. Of course, you still need to reference them. E.g., to use the `Button` component, use the following code:

```javascript static
import { Button } from 'thenativeweb-ux';
```
