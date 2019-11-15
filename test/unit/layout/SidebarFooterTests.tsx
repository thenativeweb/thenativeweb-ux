import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { SidebarFooter, ThemeProvider } from '../../../lib';

suite('SidebarFooter', (): void => {
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
          <SidebarFooter>SidebarFooter</SidebarFooter>
        </ThemeProvider>,
        container
      );
    });

    const sidebarFooter = container.querySelector('div');

    assert.that(sidebarFooter!.className).is.containing('SidebarFooter');
  });
});
