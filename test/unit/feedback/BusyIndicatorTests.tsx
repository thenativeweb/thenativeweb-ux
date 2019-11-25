import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { BusyIndicator, ThemeProvider } from '../../../lib';

suite('BusyIndicator', (): void => {
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
          <BusyIndicator />
        </ThemeProvider>,
        container
      );
    });

    const busy = container.querySelector('div');

    assert.that(busy!.className).is.containing('BusyIndicator');
  });

  test('returns null if property isVisible is set to false.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <BusyIndicator isVisible={ false } />
        </ThemeProvider>,
        container
      );
    });

    const busy = container.querySelector('div');

    assert.that(busy).is.null();
  });
});
