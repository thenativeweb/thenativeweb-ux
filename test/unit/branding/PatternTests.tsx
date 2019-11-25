import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Pattern, ThemeProvider } from '../../../lib';

suite('Pattern', (): void => {
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
          <Pattern>This is a pattern.</Pattern>
        </ThemeProvider>,
        container
      );
    });

    const pattern = container.querySelector('div');

    assert.that(pattern!.className).is.containing('Pattern');
    assert.that(pattern!.textContent).is.equalTo('This is a pattern.');
  });
});
