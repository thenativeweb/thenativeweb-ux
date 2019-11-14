import { act } from '../../shared/act';
import assert from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { CheckBox, ThemeProvider } from '../../../lib';

suite('CheckBox', (): void => {
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
          <CheckBox id='some-id' />
        </ThemeProvider>,
        container
      );
    });

    const checkbox = container.querySelector('input');

    assert.that(checkbox).is.not.null();
    assert.that(checkbox!.type).is.equalTo('checkbox');
    assert.that(checkbox!.id).is.equalTo('some-id');
    assert.that(checkbox!.className).is.containing('CheckBox');
  });

  test('toggles property checked if clicked.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <CheckBox id='some-id' />
        </ThemeProvider>,
        container
      );
    });

    const checkbox = container.querySelector('input');

    assert.that(checkbox).is.not.null();
    assert.that(checkbox!.checked).is.false();

    act((): void => {
      click(checkbox!);
    });

    assert.that(checkbox!.checked).is.true();

    act((): void => {
      click(checkbox!);
    });

    assert.that(checkbox!.checked).is.false();
  });

  test('takes onChange function and runs it if property checked has been toggled.', async (): Promise<void> => {
    let doSomething = false;

    const onChange = (): void => {
      doSomething = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <CheckBox id='some-id' onChange={ onChange } />
        </ThemeProvider>,
        container
      );
    });

    const checkbox = container.querySelector('input');

    act((): void => {
      click(checkbox!);
    });

    assert.that(doSomething).is.true();
  });
});
