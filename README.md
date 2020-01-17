# thenativeweb-ux

thenativeweb-ux provides UI components for the native web applications.

## Status

| Category         | Status                                                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/thenativeweb-ux)](https://www.npmjs.com/package/thenativeweb-ux)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/thenativeweb-ux)                                                                                        |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/thenativeweb-ux)                                                                                    |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/thenativeweb-ux/workflows/Release/badge.svg?branch=master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/thenativeweb-ux)                                                                              |

## Installation

```shell
$ npm install thenativeweb-ux
```

## Quick start

First you need to add a reference to your application. For a minimum setup, you have to reference the components `Application` and `ThemeProvider`:

```javascript
import { Application, ThemeProvider } from 'thenativeweb-ux';
```

Then, inside your application's `render` function, setup the basic structure by wrapping the `Application` component inside a `ThemeProvider`.:

```jsx
<ThemeProvider>
  <Application>
    {
      // ...
    }
  </Application>
</ThemeProvider>
```

By default, the `ThemeProvider` will create a _the native web_ theme, but you can also select other themes. Currently, the following themes are available:

-   `TheNativeWeb`
-   `Wolkenkit`

### Using components

Besides setting up the application itself, you may also use a variety of components. To use a component, you need to add a reference to it. E.g., to use the `Button` component, add the following line to your code:

```javascript
import { Button } from 'thenativeweb-ux';
```

### Viewing the Next.js sample application

The integration tests include a [Next.js sample application](test/shared/sampleApplication) that shows how the various components can be used from within a Next.js project. To run the sample application use the following command:

```shell
$ npm run start-sample-application
```

### Debugging integration tests

This project uses [puppeteer](https://github.com/GoogleChrome/puppeteer) to verify that components render correctly inside a browser. By default these tests are run in headless mode. As debugging integration tests in headless mode can be painful there are two options to debug integration tests visually.

#### Viewing failing test pages in a browser

First, to debug a failing integration test, you can have a look at the failing test page in a browser without running the tests. For that run the sample application using the following command:

```shell
$ npm run start-sample-application
```

Then point your browser to the failing test page and verify if it renders correctly.

#### Running tests with a UI and in slow motion

Second, verifying that all the puppeteer commands are executed succesfully, it is much easier to do when puppeteer is not running in headless mode. To disable headless mode, set the environment variable `DEBUG` to `true`. This will start puppeteer in non-headless mode and slow down each operation:

```shell
$ DEBUG=true npx roboter test --type integration
```

This makes most sense if you also limit tests that should be run using mocha's `only` option.

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
