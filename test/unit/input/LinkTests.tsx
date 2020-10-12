import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { click, mouseover } from '../../shared/eventDispatchers';
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
          <Link id='link' href='/linkTo'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector<HTMLAnchorElement>('#link');

    assert.that(link).is.not.null();
    assert.that(link!.className).is.containing('Link');
    assert.that(link!.textContent).is.equalTo('This is a link.');
    assert.that(link!.href).is.equalTo('/linkTo');
    assert.that(link!.rel).is.not.equalTo('noopener noreferrer');
    assert.that(link!.target).is.not.equalTo('_blank');
  });

  test('sets defined properties in DOM Element if href is absolute.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link id='link' href='https://thenativeweb.io'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector<HTMLAnchorElement>('#link');

    assert.that(link!.rel).is.equalTo('noopener noreferrer');
    assert.that(link!.target).is.equalTo('_blank');
  });

  test('takes onClick function and runs it if clicked.', async (): Promise<void> => {
    let clicked = false;

    const onClick = (): void => {
      clicked = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link id='link' onClick={ onClick } href='https://thenativeweb.io'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector<HTMLAnchorElement>('#link');

    assert.that(link).is.not.null();

    act((): void => {
      click(link!);
    });

    assert.that(clicked).is.true();
  });

  test('takes onMouseOver function and runs it if hovered.', async (): Promise<void> => {
    let hovered = false;

    const onMouseOver = (): void => {
      hovered = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link id='link' onMouseOver={ onMouseOver } href='https://thenativeweb.io'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector<HTMLAnchorElement>('#link');

    assert.that(link).is.not.null();

    act((): void => {
      mouseover(link!);
    });

    assert.that(hovered).is.true();
  });

  test('sets tabIndex on inner a element if tabIndex is provided.', async (): Promise<void> => {
    const tabIndex = 0;

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Link tabIndex={ tabIndex } id='link' href='/linkTo'>This is a link.</Link>
        </ThemeProvider>,
        container
      );
    });

    const link = container.querySelector<HTMLAnchorElement>('#link');

    assert.that(link!.tabIndex).is.equalTo(tabIndex);
  });
});
