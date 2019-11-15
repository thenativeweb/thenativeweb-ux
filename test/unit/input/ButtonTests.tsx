import { act } from '../../shared/act';
import { assert } from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Button, ThemeProvider } from '../../../lib';

suite('Button', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button>Click me</Button>
        </ThemeProvider>, container
      );
    });

    const button = container.querySelector('button');

    assert.that(button).is.not.null();
    assert.that(button!.className).is.not.containingAllOf(
      [
        'AdjustAuto',
        'AdjustFlex',
        'TypePrimary',
        'isSubtle',
        'SizeSm',
        'TypeIcon',
        'TypeIconOnly'
      ]
    );
    assert.that(button!.className).is.containing([ 'SizeMd' ]);
    assert.that(button!.type).is.equalTo('button');
    assert.that(button!.autofocus).is.not.true();
    assert.that(button!.textContent).is.equalTo('Click me');
  });

  test('sets classes for property adjust.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button adjust='auto'>Click me</Button>
          <Button adjust='flex'>Click me</Button>
        </ThemeProvider>, container
      );
    });

    const buttons = toArray(container.querySelectorAll('button'));
    const [ auto, flex ] = buttons;

    assert.that(auto).is.not.undefined();
    assert.that(auto.className).is.containing('AdjustAuto');

    assert.that(flex).is.not.undefined();
    assert.that(flex.className).is.containing('AdjustFlex');
  });

  test('sets classes for property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button size='sm'>Click me</Button>
          <Button size='md'>Click me</Button>
        </ThemeProvider>, container
      );
    });

    const buttons = toArray(container.querySelectorAll('button'));
    const [ sm, md ] = buttons;

    assert.that(sm).is.not.undefined();
    assert.that(sm.className).is.containing('SizeSm');

    assert.that(md).is.not.undefined();
    assert.that(md.className).is.containing('SizeMd');
  });

  test('sets defined property type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button type='submit'>Click me</Button>
          <Button type='button'>Click me</Button>
          <Button type='reset'>Click me</Button>
        </ThemeProvider>, container
      );
    });

    const buttons = toArray(container.querySelectorAll('button'));
    const [ submit, button, reset ] = buttons;

    assert.that(submit).is.not.undefined();
    assert.that(submit.type).is.equalTo('submit');

    assert.that(button).is.not.undefined();
    assert.that(button.type).is.equalTo('button');

    assert.that(reset).is.not.undefined();
    assert.that(reset.type).is.equalTo('reset');
  });

  test('renders in primary mode.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button isPrimary={ true }>Click me</Button>
        </ThemeProvider>, container
      );
    });

    const button = container.querySelector('button');

    assert.that(button).is.not.null();
    assert.that(button!.className).is.containing('TypePrimary');
    assert.that(button!.type).is.equalTo('submit');
  });

  test('takes onClick function and runs it if clicked.', async (): Promise<void> => {
    let clicked = false;

    const onClick = (): void => {
      clicked = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button onClick={ onClick }>Click me</Button>
        </ThemeProvider>,
        container
      );
    });

    const button = container.querySelector('button');

    assert.that(button).is.not.null();

    act((): void => {
      click(button!);
    });

    assert.that(clicked).is.true();
  });

  test('renders defined icon as child.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button icon='icon-name'>Click me</Button>
        </ThemeProvider>, container
      );
    });

    const button = container.querySelector('button');

    assert.that(button).is.not.null();
    assert.that(button!.className).is.containing('TypeIcon');
    assert.that(button!.textContent).is.equalTo('Click me');

    const svg = button!.children[0].nodeName;

    assert.that(svg).is.equalTo('svg');
  });

  test('renders defined icon as only content.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Button icon='icon-name' />
        </ThemeProvider>, container
      );
    });

    const button = container.querySelector('button');

    assert.that(button).is.not.null();
    assert.that(button!.className).is.containing('TypeIconOnly');
    assert.that(button!.textContent).is.equalTo('');

    const svg = button!.children[0].nodeName;

    assert.that(svg).is.equalTo('svg');
  });
});
