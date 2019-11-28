import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Application, ThemeProvider } from '../../../lib';

suite('Application', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders default applications.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application useDialogs={ false }>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = container.querySelector('div');

    assert.that(application!.className).is.containing('Application');
  });
});
