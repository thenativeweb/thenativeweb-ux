import act from '../../shared/act';
import assert from 'assertthat';
import CheckBox from '../../../lib/components/CheckBox';
import { click } from '../../shared/eventDispatchers';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import React, { useState } from 'react';

suite('CheckBox', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders default checkboxes.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <CheckBox id='some-id' />
        </ThemeProvider>,
        container
      );
    });

    const checkbox = document.getElementsByTagName('input')[0];

    assert.that(checkbox.type).is.equalTo('checkbox');
    assert.that(checkbox.id).is.equalTo('some-id');
    assert.that(checkbox.className).is.containing('CheckBox');
  });

  test('takes onChange function and runs it if checked.', async (): Promise<void> => {
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

    const checkbox = document.getElementsByTagName('input')[0];

    act((): void => {
      click(checkbox);
    });

    assert.that(doSomething).is.true();
  });

  test('toggles prop checked if clicked.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <CheckBox id='some-id' />
        </ThemeProvider>,
        container
      );
    });

    const checkbox = document.getElementsByTagName('input')[0];

    assert.that(checkbox.checked).is.false();

    act((): void => {
      click(checkbox);
    });

    assert.that(checkbox.checked).is.true();

    act((): void => {
      click(checkbox);
    });

    assert.that(checkbox.checked).is.false();
  });
});
