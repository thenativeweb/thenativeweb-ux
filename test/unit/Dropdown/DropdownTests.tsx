import act from '../../shared/act';
import assert from 'assertthat';
import Dropdown, { DropdownOption } from '../../../lib/components/Dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('Dropdown', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although only required properties have been defined.', async (): Promise<void> => {
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
    assert.that(dropdown!.className).is.containingAllOf(['Dropdown', 'SizeMd']);
  });
});
