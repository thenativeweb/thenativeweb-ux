import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Brand, ThemeProvider } from '../../../lib';

suite('Brand', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Brand />
        </ThemeProvider>,
        container
      );
    });

    const brand = container.querySelector('div');

    assert.that(brand!.className).is.containing('Brand');
  });

  test('sets class for defined property color if type is set to minimal.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Brand color='monochrome' type='minimal' />
        </ThemeProvider>,
        container
      );
    });

    const logo = container.querySelector('[class^=LogoMinimal]');

    assert.that(logo!.className).is.containing('IsMonochrome');
  });

  test('inserts logos according to defined type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Brand type='minimal' />
          <Brand type='full' />
        </ThemeProvider>,
        container
      );
    });

    const minimal = container.querySelector('[class^=LogoMinimal]');

    assert.that(minimal).is.not.null();

    const full = container.querySelector('[class^=LogoFull]');

    assert.that(full).is.not.null();
  });

  test('passes through defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Brand size='sm' />
          <Brand size='md' />
          <Brand size='lg' />
        </ThemeProvider>,
        container
      );
    });

    const brands = toArray(container.querySelectorAll('[class^=LogoFull]'));
    const [ small, medium, large ] = brands;

    assert.that(small.className).is.containing('SizeSm');
    assert.that(medium.className).is.containing('SizeMd');
    assert.that(large.className).is.containing('SizeLg');
  });

  test('passes through defined property isInteractive.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Brand isInteractive={ true } type='minimal' />
          <Brand isInteractive={ false } type='minimal' />
        </ThemeProvider>,
        container
      );
    });

    const brands = toArray(container.querySelectorAll('[class^=LogoMinimal]'));
    const [ interactive, notInteractive ] = brands;

    assert.that(interactive.className).is.containing('IsInteractive');
    assert.that(notInteractive.className).is.not.containing('IsInteractive');
  });
});
