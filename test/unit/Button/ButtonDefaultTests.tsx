import act from '../../shared/act';
import assert from 'assertthat';
import Button from '../../../lib/components/Button/ButtonDefault';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('ButtonDefault component', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('REACTDOM - it shows the expected text when clicked.', async (): Promise<void> => {
    let clicked = false;

    const onClick = (): void => {
      clicked = true;
    };

    act((): void => {
      ReactDOM.render(<ThemeProvider><Button onClick={ onClick }>SUBSCRIBE TO BASIC</Button></ThemeProvider>, container);
    });

    const button = container.getElementsByTagName('button')[0];

    assert.that(button.textContent).is.equalTo('SUBSCRIBE TO BASIC');

    act((): void => {
      click(button);
    });

    assert.that(clicked).is.true();
  });
});
