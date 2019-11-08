# thenativeweb-ux

thenativeweb-ux provides UI components for the native web applications.

## Status

| Category         | Status                                                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/thenativeweb-ux)](https://www.npmjs.com/package/thenativeweb-ux)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/thenativeweb-ux)                                                                                        |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/thenativeweb-ux)                                                                                    |
| Build            | [![CircleCI](https://img.shields.io/circleci/build/github/thenativeweb/thenativeweb-ux)](https://circleci.com/gh/thenativeweb/thenativeweb-ux/tree/master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/thenativeweb-ux)                                                                              |

## Installation

```shell
$ npm install thenativeweb-ux react react-dom
```

## Quick start

First you need to add a reference to your application. For the minimum setup, you have to reference the components `Application` and `ThemeProvider`:

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

| Name           | Description                              |
| -------------- | ---------------------------------------- |
| `thenativeweb` | A theme for the native web applications. |
| `wolkenkit`    | A theme for wolkenkit applications.      |

### Using components

Afterwards, you can use any component. Of course, you still need to reference them. E.g., to use the `Button` component, use the following code:

```javascript static
import { Button } from 'thenativeweb-ux';
```

### Viewing the documentation

The complete documentation for all components can be found at [ux.thenativeweb.io](https://ux.thenativeweb.io).

### Viewing the Next.js sample application

The integration tests include a [Next.js sample application](test/shared/sampleApplication) that shows how `thenativeweb-ux` can be used from within a Next.js project.

### Debugging integration tests

This project uses [puppeteer](https://github.com/GoogleChrome/puppeteer) to verify that components render correctly inside a browser. By default these tests are run in headless mode. As debugging integration tests in headless mode can be painful there are two options to debug integration tests visually.

#### 1. Viewing the failing test page in a browser

The first option to debug a failing integration test is to view the failing test page in a browser without running the tests. Therefore you need to run the sample application using the following command:

```shell
$ npm run start-sample-application
```

Then you can point your browser to the failing test page and verify if it renders correctly.

#### 2. Running the tests with UI and in slow motion

The second option is to verify that all the pupeteer commands are executed succesfully which is much easier to do when puppeteer is not running in headless mode. Set the environment variable `DEBUG` to `true`. This will start Puppeteer in non-headless mode and slow down each operation.

```shell
$ DEBUG=true npx roboter test --type integration
```

This mode makes most sense if you also limit tests that should be run using mocha's 'only' option.

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
