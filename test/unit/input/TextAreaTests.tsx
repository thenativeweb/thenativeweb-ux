import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import toArray from '../../shared/toArray';
import { TextArea, ThemeProvider } from '../../../lib';

suite('TextArea', (): void => {
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
          <TextArea />
        </ThemeProvider>, container
      );
    });

    const textArea = container.querySelector('textarea');

    assert.that(textArea!.className).is.containingAllOf([ 'TextArea', 'SizeMd' ]);
  });

  test('can be picked by defined property id.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextArea id='some-id' />
        </ThemeProvider>, container
      );
    });

    const textArea = container.querySelectorAll('#some-id');

    assert.that(textArea).is.not.null();

  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextArea size='sm' />
          <TextArea size='md' />
        </ThemeProvider>, container
      );
    });

    const [ small, medium ] = toArray(container.querySelectorAll('textarea'));

    assert.that(small.className).is.containing('SizeSm');
    assert.that(medium.className).is.containing('SizeMd');
  });

  test('sets classes and property in DOM Element if disabled is set to true.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextArea disabled={ true } />
        </ThemeProvider>, container
      );
    });

    const textArea = container.querySelector('textarea');

    assert.that(textArea!.className).is.containing('IsDisabled');
    assert.that(textArea!.disabled).is.true();
  });

  test('sets defined placeholder.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextArea placeholder='This is a placeholder.' />
        </ThemeProvider>, container
      );
    });

    const textArea = container.querySelector('textarea');

    assert.that(textArea!.placeholder).is.equalTo('This is a placeholder.');
  });

  test('makes input required.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextArea required={ true } />
        </ThemeProvider>, container
      );
    });

    const textArea = container.querySelector('textarea');

    assert.that(textArea!.required).is.true();
  });

  test('sets defined value.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <TextArea value='This is actual content.' />
        </ThemeProvider>, container
      );
    });

    const textArea = container.querySelector('textarea');

    assert.that(textArea!.value).is.equalTo('This is actual content.');
  });
});
