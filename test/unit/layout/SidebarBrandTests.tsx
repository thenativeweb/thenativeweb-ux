import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import SidebarBrand from '../../../lib/components/layout/SidebarBrand';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('SidebarBrand', (): void => {
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
          <SidebarBrand>SidebarBrand</SidebarBrand>
        </ThemeProvider>,
        container
      );
    });

    const sidebarBrand = container.querySelector('div');

    assert.that(sidebarBrand!.className).is.containing('SidebarBrand');
  });
});
