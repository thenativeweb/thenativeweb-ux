import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { ControlGroupDivider, ThemeProvider } from '../../../lib';

suite('ControlGroupDivider', (): void => {
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
          <ControlGroupDivider />
        </ThemeProvider>,
        container
      );
    });

    const controlGroupDivider = container.querySelector('hr');

    assert.that(controlGroupDivider!.className).is.containing('ControlGroupDivider');
  });
});
