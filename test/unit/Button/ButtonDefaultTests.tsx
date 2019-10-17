import act from '../../shared/act';
import assert from 'assertthat';
import Button from '../../../lib/components/Button/ButtonDefault';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('Button', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('takes onClick function and runs it if clicked.', async (): Promise<void> => {
    let clicked = false;

    const onClick = (): void => {
      clicked = true;
    };

    act((): void => {
      ReactDOM.render(<ThemeProvider><Button onClick={ onClick }>Click me</Button></ThemeProvider>, container);
    });

    const button = container.getElementsByTagName('button')[0];

    act((): void => {
      click(button);
    });

    assert.that(clicked).is.true();
  });

  test('takes text as children and renders them as textContent.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(<ThemeProvider><Button>Click me</Button></ThemeProvider>, container);
    });

    const button = container.getElementsByTagName('button')[0];

    assert.that(button.textContent).is.equalTo('Click me');
  });

  test('sets classes for prop adjust.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button adjust='auto'>Button AdjustAuto</Button>
          <Button adjust='flex'>Button AdjustFlex</Button>
          <Button>Button AdjustUndefined</Button>
        </ThemeProvider>, container
      );
    });

    const buttons = Array.prototype.slice.call(document.getElementsByTagName('button'));
    const [ buttonAdjustAuto, buttonAdjustFlex, buttonAdjustNotSet ] = buttons;

    assert.that(buttonAdjustAuto.className).is.containing('AdjustAuto');
    assert.that(buttonAdjustFlex.className).is.containing('AdjustFlex');
    assert.that(buttonAdjustNotSet.className).is.not.containingAllOf([ 'AdjustAuto', 'AdjustFlex' ]);
  });

  test('sets classes for prop size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button size='sm'>Button SizeSm</Button>
          <Button size='md'>Button SizeMd</Button>
          <Button>Button SizeNotSet</Button>
        </ThemeProvider>, container
      );
    });

    const buttons = Array.prototype.slice.call(document.getElementsByTagName('button'));
    const [ buttonSizeSm, buttonSizeMd, buttonSizeNotSet ] = buttons;

    assert.that(buttonSizeSm.className).is.containing('SizeSm');
    assert.that(buttonSizeMd.className).is.containing('SizeMd');
    assert.that(buttonSizeNotSet.className).is.containing('SizeMd');
    assert.that(buttonSizeNotSet.className).is.not.containing('SizeSm');
  });
});
