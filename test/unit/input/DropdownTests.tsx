import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, ThemeProvider } from '../../../lib';

suite('Dropdown', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders with required properties.', async (): Promise<void> => {
    const options = [
      {
        label: 'random-label',
        value: 'some-value'
      }, {
        label: 'some-label',
        value: 'random-value'
      }];

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Dropdown options={ options } value='some-value'>Dropdown</Dropdown>
        </ThemeProvider>,
        container
      );
    });

    const dropdown = container.querySelector('div');

    assert.that(dropdown).is.not.null();
    assert.that(dropdown!.className).is.containingAllOf([ 'Dropdown', 'SizeMd' ]);
    assert.that(dropdown!.className).is.not.containingAllOf([ 'Dropdown', 'SizeSm', 'IsFocused', 'CollapseIcon' ]);
  });
});
