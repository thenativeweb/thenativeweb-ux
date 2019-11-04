import act from '../../shared/act';
import assert from 'assertthat';
import Label from '../../../lib/components/typography/Label';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('typography/Label', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
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
