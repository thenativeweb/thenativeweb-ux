import { act } from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { ControlGroup, ThemeProvider } from '../../../lib';

suite('ControlGroup', (): void => {
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
          <ControlGroup />
        </ThemeProvider>,
        container
      );
    });

    const controlGroup = container.querySelector('div');

    assert.that(controlGroup!.className).is.containing('ControlGroup');
  });

  test('returns null if property isVisible is set to false.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <ControlGroup isVisible={ false } />
        </ThemeProvider>,
        container
      );
    });

    const controlGroup = container.querySelector('div');

    assert.that(controlGroup).is.null();
  });
});
