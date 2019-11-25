import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Label, ThemeProvider } from '../../../lib';

suite('Label', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders and sets defined property id.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Label id='some-id'>I am a label.</Label>
        </ThemeProvider>,
        container
      );
    });

    const label = container.querySelector('#some-id');

    assert.that(label).is.not.null();
    assert.that(label!.className).is.containing('Label');
  });
});
