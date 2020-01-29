import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Website } from '../../../lib';

suite('Website', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Website><div className='foo'>Website</div></Website>
        </ThemeProvider>,
        container
      );
    });

    const website = container.querySelector('.foo');

    assert.that(website!.textContent).is.equalTo('Website');
  });

  test('renders icons.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Website id='website'><div>Website</div></Website>
        </ThemeProvider>,
        container
      );
    });

    const iconSvgContainer = container.querySelector('#website svg');

    assert.that(iconSvgContainer).is.not.null();
    assert.that(iconSvgContainer!.innerHTML).is.containing('<symbol');
  });
});
