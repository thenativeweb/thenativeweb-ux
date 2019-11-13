import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, ThemeProvider } from '../../../lib';

suite('Icon', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders with defined required property.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Icon name='some-name' />
        </ThemeProvider>,
        container
      );
    });

    const icon = container.querySelector('svg');

    assert.that(icon).is.not.null();
  });
});
