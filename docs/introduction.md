## Installation

```shell
$ npm install thenativeweb-ux
```

## Setting up

In order for the design system to work you need to wrap your application in the `Application` component and provide a theme using the `ThemeProvider` component. You must include the `Application.Services` component in your application.

```jsx static
<ThemeProvider theme='thenativeweb'>
  <Application>
    <Application.Services />

    { // Your application components go here. }
  </Application>
</ThemeProvider>
```

## Using components

To use components, you first need to integrate them into your React application. E.g., to load the `Button` component, use the following line of code:

```javascript static
import { Button } from 'thenativeweb-ux';
```

Then, you can use it later on:

```jsx static
<Button>Click me!</Button>
```
