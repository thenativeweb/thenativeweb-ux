import { act } from '../../shared/act';
import { assert } from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Toggle } from '../../../lib';

suite('Toggle', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with required properties.', async (): Promise<void> => {
    const valuesForTesting = [ 'value-one', 'value-two' ];
    const selectedValue = valuesForTesting[0];

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Toggle values={ valuesForTesting } selectedValue={ selectedValue } />
        </ThemeProvider>,
        container
      );
    });

    const toggle = container.querySelector('div');

    assert.that(toggle!.className).is.containing('Toggle');
    assert.that(toggle!.children[0].textContent).is.equalTo('value-one');
    assert.that(toggle!.children[1].textContent).is.equalTo('value-two');
  });

  test('can be picked by defined id.', async (): Promise<void> => {
    const valuesForTesting = [ 'value-one', 'value-two' ];
    const selectedValue = valuesForTesting[0];

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Toggle id='some-id' values={ valuesForTesting } selectedValue={ selectedValue } />
        </ThemeProvider>,
        container
      );
    });

    const toggle = container.querySelector('#some-id');

    assert.that(toggle!).is.not.null();
  });

  test('takes onChange function and runs it if clicked.', async (): Promise<void> => {
    const valuesForTesting = [ 'value-one', 'value-two' ];
    const selectedValue = valuesForTesting[0];
    let newValue = 'old-value';

    const handleChange = (value: string): void => {
      newValue = value;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Toggle values={ valuesForTesting } selectedValue={ selectedValue } onChange={ handleChange } />
        </ThemeProvider>,
        container
      );
    });

    const button = container.querySelector('button');

    act((): void => {
      click(button!);
    });

    assert.that(newValue).is.equalTo('value-one');
  });
});
