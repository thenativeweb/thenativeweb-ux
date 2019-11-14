import { act } from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { ControlGroupItem, ThemeProvider } from '../../../lib';

suite('ControlGroupItem', (): void => {
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
          <ControlGroupItem>
            <div>This is an item.</div>
          </ControlGroupItem>
        </ThemeProvider>,
        container
      );
    });

    const controlGroupItem = container.querySelector('div');

    assert.that(controlGroupItem!.className).is.containingAllOf([ 'ControlGroupItem', 'AdjustFlex' ]);
  });

  test('sets classes for defined property adjust.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <ControlGroupItem className='Item-for-testing' adjust='flex'>
            <div>This is an item.</div>
          </ControlGroupItem>
          <ControlGroupItem className='Item-for-testing' adjust='auto'>
            <div>This is an item.</div>
          </ControlGroupItem>
        </ThemeProvider>,
        container
      );
    });

    const [ flex, auto ] = toArray(container.querySelectorAll('.Item-for-testing'));

    assert.that(flex.className).is.containing('AdjustFlex');
    assert.that(auto.className).is.containing('AdjustAuto');
  });

  test('inserts link if property helpLink is defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <ControlGroupItem className='Item-for-testing' helpLink='/helplink'>
            <div>This is an item.</div>
          </ControlGroupItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('.Item-for-testing a');

    assert.that(item).is.not.null();
  });

  test('inserts label and sets classes if property label is defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <ControlGroupItem className='Item-for-testing' label='label'>
            <div>This is an item.</div>
          </ControlGroupItem>
        </ThemeProvider>,
        container
      );
    });

    const element = container.querySelector('label');

    assert.that(element).is.not.null();

    const item = container.querySelector('.Item-for-testing');

    assert.that(item!.className).is.containing('Labeled');
  });
});
