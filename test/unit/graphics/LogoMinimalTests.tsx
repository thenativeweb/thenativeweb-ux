import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../../lib/utils/toArray';
import { LogoMinimal, ThemeProvider } from '../../../lib';

suite('LogoMinimal', (): void => {
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
          <LogoMinimal />
        </ThemeProvider>,
        container
      );
    });

    const logo = container.querySelector('div');

    assert.that(logo!.className).is.containingAllOf([ 'LogoMinimal', 'SizeMd' ]);
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoMinimal size='sm' />
          <LogoMinimal size='md' />
          <LogoMinimal size='lg' />
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

  test('sets classes for defined property color.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoMinimal color='default' />
          <LogoMinimal color='monochrome' />
        </ThemeProvider>,
        container
      );
    });

    const logos = toArray(container.querySelectorAll('div'));
    const [ standard, monochrome ] = logos;

    assert.that(standard.className).is.not.containing('IsMonochrome');
    assert.that(monochrome.className).is.containing('IsMonochrome');
  });

  test('sets classes for defined property isInteractive.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <LogoMinimal isInteractive={ true } />
          <LogoMinimal isInteractive={ false } />
        </ThemeProvider>,
        container
      );
    });

    const logos = toArray(container.querySelectorAll('div'));
    const [ isInteractive, notInteractive ] = logos;

    assert.that(isInteractive.className).is.containing('IsInteractive');
    assert.that(notInteractive.className).is.not.containing('IsInteractive');
  });
});
