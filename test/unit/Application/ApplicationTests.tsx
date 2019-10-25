import act from '../../shared/act';
import Application from '../../../lib/components/Application';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('Application', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders default applications.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = container.querySelector('div');

    assert.that(application!.className).is.containing('Application');
  });
});
