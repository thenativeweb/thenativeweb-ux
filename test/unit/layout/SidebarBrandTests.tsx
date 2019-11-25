import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { SidebarBrand, ThemeProvider } from '../../../lib';

suite('SidebarBrand', (): void => {
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
          <SidebarBrand>SidebarBrand</SidebarBrand>
        </ThemeProvider>,
        container
      );
    });

    const sidebarBrand = container.querySelector('div');

    assert.that(sidebarBrand!.className).is.containing('SidebarBrand');
  });
});
