import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Text, ThemeProvider } from '../../../lib';

suite('Text', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Text>I am a text.</Text>
        </ThemeProvider>,
        container
      );
    });

    const text = container.querySelector('div');

    assert.that(text!.className).is.containingAllOf(
      [
        'Text',
        'AdjustAuto',
        'SizeMd'
      ]
    );
    assert.that(text!.className).is.not.containing('BreakLines');
  });

  test('sets classes for property adjust.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Text adjust='flex'>I am a text.</Text>
        </ThemeProvider>,
        container
      );
    });

    const text = container.querySelector('div');

    assert.that(text!.className).is.containing('AdjustFlex');
  });

  test('sets classes for property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Text size='sm'>I am a text.</Text>
        </ThemeProvider>,
        container
      );
    });

    const text = container.querySelector('div');

    assert.that(text!.className).is.containing('SizeSm');
  });

  test('sets classes for property breakLines.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Text breakLines={ true }>I am a text.</Text>
        </ThemeProvider>,
        container
      );
    });

    const text = container.querySelector('div');

    assert.that(text!.className).is.containing('BreakLines');
  });
});
