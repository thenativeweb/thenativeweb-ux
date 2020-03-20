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
$ npm install thenativeweb-ux react react-dom next
```

## Viewing the documentation

For application developers there is a [styleguide](https://ux.thenativeweb.io/) that serves as the documentation of this module. It contains a quick start, and showcases all the available components.

You can also run the styleguide on your local machine. For that, clone this repository, install its dependencies, and run the following command:

```shell
$ npm run start-styleguide
```

Then point your browser to `http://localhost:6060/`.

## Viewing the Next.js sample application

The integration tests include a [Next.js sample application](test/shared/sampleApplication) that shows how components can be used from within a Next.js project. To run the sample application use the following command:

```shell
$ npm run start-sample-application
```

## Optimizing images

To optimize JPG, PNG, and SVG images of a website, use the following command:

```shell
$ npx ux optimize-images --source <path> --destination <path>
```

The command recursively copies all images from the source folder to the destination folder and optimizes them using a reasonable preset.

## Verifying links

To verify whether a website contains broken links, use the following command:

```shell
$ npx ux verify-links <url>
```

If you want to ignore some urls, provide the `--ignore` flag and set a regular expression that describes the urls to ignore:

```shell
$ npx ux verify-links --ignore <regex> <url>
```

Sometimes, you may want to specify a sitemap file. For this, add the `--sitemap` flag and provide the path to the sitemap file you want to use:

```shell
$ npx ux verify-links --sitemap <path> <url>
```

## Debugging integration tests

This project uses [puppeteer](https://github.com/GoogleChrome/puppeteer) to verify that components render correctly inside a browser. By default these tests are run in headless mode. As debugging integration tests in headless mode can be painful there are two options to debug integration tests visually.

### Viewing failing test pages in a browser

First, to debug a failing integration test, you can have a look at the failing test page in a browser without running the tests. For that run the sample application using the following command:

```shell
$ npm run start-sample-application
```

Then point your browser to the failing test page and verify if it renders correctly.

### Running tests with a UI and in slow motion

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

## Analysing the bundle size

When you add new dependencies, make sure to analyse the effects on the bundle size. To generate a bundle analysis for both the client and the server run:

```shell
$ npx roboter analyse-bundle
```

This task will build the styleguide with all of its pages, run an analysis of the generated bundles, and open the results in the browser.
