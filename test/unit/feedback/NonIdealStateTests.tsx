import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { NonIdealState, ThemeProvider } from '../../../lib';

suite('NonIdealState', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with only required properties.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <NonIdealState id='component' cause='Item could not be found'>
            <p>Try to hit search again.</p>
          </NonIdealState>
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');
    const cause = component!.querySelector<HTMLElement>('[class^=Cause]');
    const help = component!.querySelector<HTMLElement>('[class^=Help]');

    assert.that(component!.className).is.containing('NonIdealState');
    assert.that(cause!.innerHTML).is.equalTo('Item could not be found');
    assert.that(help!.innerHTML).is.containing('Try to hit search again.');
  });
});
