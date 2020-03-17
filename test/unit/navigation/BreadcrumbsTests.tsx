import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../../lib/utils/toArray';
import { Breadcrumbs, ThemeProvider } from '../../../lib';

suite('Breadcrumbs', (): void => {
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
          <Breadcrumbs id='component' items={ [ 'First level', 'Second level', 'Third level' ] } />
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');

    assert.that(component!.className).is.containingAllOf(
      [
        'Breadcrumb',
        'SizeMd',
        'ColorDark'
      ]
    );

    assert.that(component!.className).is.not.containingAllOf(
      [
        'SizeSm',
        'ColorLight'
      ]
    );

    const breadcrumbs = toArray(component!.querySelectorAll<HTMLDivElement>('[class^=Breadcrumb-]'));
    const [ first, second, third ] = breadcrumbs;

    assert.that(breadcrumbs.length).is.equalTo(3);
    assert.that(first.textContent).is.equalTo('First level');
    assert.that(second.textContent).is.equalTo('Second level');
    assert.that(third.textContent).is.equalTo('Third level');
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Breadcrumbs id='sizeSm' size='sm' items={ [ 'First level', 'Second level', 'Third level' ] } />
          <Breadcrumbs id='sizeMd' size='md' items={ [ 'First level', 'Second level', 'Third level' ] } />
        </ThemeProvider>,
        container
      );
    });

    const sizeSm = container.querySelector('#sizeSm');
    const sizeMd = container.querySelector('#sizeMd');

    assert.that(sizeSm!.className).is.containing('SizeSm');
    assert.that(sizeMd!.className).is.containing('SizeMd');
  });

  test('sets classes for defined property color.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Breadcrumbs id='colorLight' color='light' items={ [ 'First level', 'Second level', 'Third level' ] } />
          <Breadcrumbs id='colorDark' color='dark' items={ [ 'First level', 'Second level', 'Third level' ] } />
        </ThemeProvider>,
        container
      );
    });

    const colorLight = container.querySelector('#colorLight');
    const colorDark = container.querySelector('#colorDark');

    assert.that(colorLight!.className).is.containing('ColorLight');
    assert.that(colorDark!.className).is.containing('ColorDark');
  });

  test('highlights words according to property searchWords.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Breadcrumbs id='component' searchWords={ [ 'Second' ] } items={ [ 'First level', 'Second level', 'Third level' ] } />
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');
    const highlights = toArray(component!.querySelectorAll<HTMLDivElement>('[class*=Highlight-]'));

    assert.that(highlights.length).is.equalTo(1);
    assert.that(highlights[0]!.textContent).is.equalTo('Second');
  });
});
