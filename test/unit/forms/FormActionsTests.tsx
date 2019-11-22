import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { FormActions, ThemeProvider } from '../../../lib';

suite('FormActions', (): void => {
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
          <FormActions />
        </ThemeProvider>,
        container
      );
    });

    const formActions = container.querySelector('div');

    assert.that(formActions!.className).is.containing('FormActions');
  });
});
