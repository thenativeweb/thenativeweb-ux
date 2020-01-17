import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { HighlightText, ThemeProvider } from '../../../lib';

suite('HighlightText', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with only required properties.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <HighlightText className='component' searchWords={ [ 'foo', 'bar', 'baz' ] }>
            This text will be highlighted: foo, bar, and baz.
          </HighlightText>
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('.component');
    const highlights = toArray(container.querySelectorAll<HTMLElement>('[class^=Highlight-]'));
    const [ foo, bar, baz ] = highlights;

    assert.that(component!.className).is.containing('HighlightText');
    assert.that(highlights.length).is.equalTo(3);
    assert.that(foo.textContent).is.equalTo('foo');
    assert.that(bar.textContent).is.equalTo('bar');
    assert.that(baz.textContent).is.equalTo('baz');
  });
});
