# thenativeweb-ux

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

The documentation for the components is provided as a styleguide. To access the styleguide, run the following command:

```shell
$ npx roboter styleguide
```

Then point your browser to [http://localhost:6060](http://localhost:6060).

### Running the sample application

Additionally, there is a sample application. To run the sample application, use the following command:

```shell
$ npx roboter serve
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

Copyright (c) 2017-2018 the native web.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with this program. If not, see [GNU Licenses](http://www.gnu.org/licenses/).
