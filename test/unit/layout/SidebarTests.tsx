import { act } from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Sidebar, ThemeProvider } from '../../../lib';

suite('Sidebar', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Sidebar id='some-id'>Sidebar</Sidebar>
        </ThemeProvider>,
        container
      );
    });

    const sidebar = container.querySelector('div');

    assert.that(sidebar!.id).is.equalTo('some-id');
    assert.that(sidebar!.className).is.containing('Sidebar');
  });
});
