import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Website } from '../../../lib';

suite('Website', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Website>Website</Website>
        </ThemeProvider>,
        container
      );
    });

    const website = container.querySelector('div');

    assert.that(website!.className).is.containing('Website');
  });
});
