import { act } from 'react-dom/test-utils';
import assert from 'assertthat';
import Button from '../../../lib/components/Button/ButtonDefault';
import React from 'react';
import ReactDOM from 'react-dom';

suite('ButtonDefault component', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('REACTDOM - it shows the expected text when clicked.', async (): Promise<void> => {
    /* eslint-disable @typescript-eslint/no-floating-promises */
    act((): void => {
      ReactDOM.render(<Button>SUBSCRIBE TO BASIC</Button>, container);
    });

    const button = container.getElementsByTagName('button')[0];

    assert.that(button.textContent).is.equalTo('SUBSCRIBE TO BASIC');
    /* eslint-enable @typescript-eslint/no-floating-promises */
  });
});
