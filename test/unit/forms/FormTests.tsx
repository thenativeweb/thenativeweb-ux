import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { submit } from '../../shared/eventDispatchers';
import { Form, ThemeProvider } from '../../../lib';

suite('Form', (): void => {
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
          <Form />
        </ThemeProvider>,
        container
      );
    });

    const form = container.querySelector('form');

    assert.that(form!.className).is.containing('Form');
  });

  test('takes onSubmit function and runs it if submitted.', async (): Promise<void> => {
    let submitted = false;

    const onSubmit = (): void => {
      submitted = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Form onSubmit={ onSubmit } />
        </ThemeProvider>,
        container
      );
    });

    const form = container.querySelector('form');

    act((): void => {
      submit(form!);
    });

    assert.that(submitted).is.true();
  });
});
