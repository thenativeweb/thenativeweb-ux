import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonHint, ThemeProvider } from '../../../lib';

suite('ButtonHint', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <ButtonHint>Click me</ButtonHint>
        </ThemeProvider>,
        container
      );
    });

    const buttonHint = container.querySelector('span');

    assert.that(buttonHint).is.not.null();
    assert.that(buttonHint!.className).is.containing('ButtonHint');
  });
});
