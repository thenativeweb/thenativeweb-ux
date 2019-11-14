import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import toArray from '../../shared/toArray';
import { LogoTheNativeWeb, ThemeProvider } from '../../../lib';

suite('LogoTheNativeWeb', (): void => {
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
          <LogoTheNativeWeb />
        </ThemeProvider>,
        container
      );
    });

    const logo = container.querySelector('div');

    assert.that(logo!.className).is.containingAllOf([ 'LogoTheNativeWeb', 'SizeMd' ]);
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoTheNativeWeb size='md' />
          <LogoTheNativeWeb size='lg' />
          <LogoTheNativeWeb size='xl' />
        </ThemeProvider>,
        container
      );
    });

    const logos = toArray(container.querySelectorAll('div'));
    const [ medium, large, xLarge ] = logos;

    assert.that(medium.className).is.containing('SizeMd');
    assert.that(large.className).is.containing('SizeLg');
    assert.that(xLarge.className).is.containing('SizeXl');
  });

  test('returns null if isVisible is set to false.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoTheNativeWeb isVisible={ false } />
        </ThemeProvider>,
        container
      );
    });

    const logo = container.querySelector('div');

    assert.that(logo).is.null();
  });
});
