import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, ThemeProvider } from '../../../lib';

suite('Link', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with required properties.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link href='/linkTo'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector('a');

    assert.that(link).is.not.null();
    assert.that(link!.className).is.containing('Link');
    assert.that(link!.textContent).is.equalTo('This is a link.');
    assert.that(link!.href).is.equalTo('/linkTo');
    assert.that(link!.rel).is.not.equalTo('noopener noreferrer');
    assert.that(link!.target).is.not.equalTo('_blank');
  });

  test('can be found by defined property id.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link id='some-id' href='/linkTo'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector('#some-id');

    assert.that(link).is.not.null();
  });

  test('sets defined properties in DOM Element if href is absolute.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link href='https://thenativeweb.io'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector('a');

    assert.that(link!.rel).is.equalTo('noopener noreferrer');
    assert.that(link!.target).is.equalTo('_blank');
  });
});
