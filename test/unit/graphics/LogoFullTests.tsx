import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../../lib/utils/toArray';
import { LogoFull, ThemeProvider } from '../../../lib';

suite('LogoFull', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoFull />
        </ThemeProvider>,
        container
      );
    });

    const logo = container.querySelector('div');

    assert.that(logo!.className).is.containingAllOf([ 'LogoFull', 'SizeMd' ]);
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoFull size='sm' />
          <LogoFull size='md' />
          <LogoFull size='lg' />
        </ThemeProvider>,
        container
      );
    });

    const logos = toArray(container.querySelectorAll('div'));
    const [ small, medium, large ] = logos;

    assert.that(small.className).is.containing('SizeSm');
    assert.that(medium.className).is.containing('SizeMd');
    assert.that(large.className).is.containing('SizeLg');
  });
});
