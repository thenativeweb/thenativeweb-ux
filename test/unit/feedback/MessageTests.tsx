import { act } from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Message, ThemeProvider } from '../../../lib';

suite('Message', (): void => {
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
          <Message />
        </ThemeProvider>,
        container
      );
    });

    const busy = container.querySelector('div');

    assert.that(busy!.className).is.containing('Message');
  });

  test('returns null if property isVisible is set to false.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Message isVisible={ false } />
        </ThemeProvider>,
        container
      );
    });

    const message = container.querySelector('div');

    assert.that(message).is.null();
  });

  test('sets classes for defined property type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Message id='some-id' type='info' />
          <Message id='some-id' type='error' />
        </ThemeProvider>,
        container
      );
    });

    const message = toArray(container.querySelectorAll('#some-id'));
    const [ info, error ] = message;

    assert.that(info.className).is.containingAllOf([ 'TypeInfo', 'WithIcon' ]);
    assert.that(error.className).is.containingAllOf([ 'TypeError', 'WithIcon' ]);
  });
});
