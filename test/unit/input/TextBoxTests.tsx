import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { TextBox, ThemeProvider } from '../../../lib';

suite('TextBox', (): void => {
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
          <TextBox />
        </ThemeProvider>,
        container
      );
    });

    const textBox = container.querySelector('input');

    assert.that(textBox).is.not.null();
    assert.that(textBox!.className).is.containing('TextBox');
    assert.that(textBox!.type).is.equalTo('text');
    assert.that(textBox!.disabled).is.false();
    assert.that(textBox!.required).is.false();
  });

  test('can be picked by id.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextBox id='some-id' />
        </ThemeProvider>,
        container
      );
    });

    const textBox = container.querySelector('#some-id');

    assert.that(textBox).is.not.null();
  });

  test('sets classes and property on DOM element if disabled is set to true.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextBox disabled={ true } />
        </ThemeProvider>,
        container
      );
    });

    const textBox = container.querySelector('input');

    assert.that(textBox!.disabled).is.true();
    assert.that(textBox!.className).is.containing('IsDisabled');
  });

  test('sets property on DOM element if required is set to true.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextBox required={ true } />
        </ThemeProvider>,
        container
      );
    });

    const textBox = container.querySelector('input');

    assert.that(textBox!.required).is.true();
  });

  test('sets placeholder on DOM element if defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextBox placeholder='This is a placeholder.' />
        </ThemeProvider>,
        container
      );
    });

    const textBox = container.querySelector('input');

    assert.that(textBox!.placeholder).is.equalTo('This is a placeholder.');
  });

  test('sets actual content on DOM element if value is defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextBox value='This is a value.' />
        </ThemeProvider>,
        container
      );
    });

    const textBox = container.querySelector('input');

    assert.that(textBox!.value).is.equalTo('This is a value.');
  });

  test('sets type on DOM element if is defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextBox type='date' />
          <TextBox type='port' />
          <TextBox type='time' />
        </ThemeProvider>,
        container
      );
    });

    const textBoxes = toArray(container.querySelectorAll('input'));
    const [ date, port, time ] = textBoxes;

    assert.that(date.type).is.equalTo('date');

    assert.that(port.type).is.equalTo('number');
    assert.that(port.className).is.containing('TypePort');

    assert.that(time.type).is.equalTo('time');
    assert.that(time.className).is.containing('TypeTime');
  });
});
