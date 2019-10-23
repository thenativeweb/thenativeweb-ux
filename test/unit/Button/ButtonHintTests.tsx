import act from '../../shared/act';
import assert from 'assertthat';
import ButtonHint from '../../../lib/components/Button/ButtonHint';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('ButtonHint', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('sets ButtonHint class.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <ButtonHint>Click me</ButtonHint>
        </ThemeProvider>,
        container
      );
    });

    const buttonHint = container.getElementsByTagName('span')[0];

    assert.that(buttonHint.className).is.containing('ButtonHint');
  });
});
