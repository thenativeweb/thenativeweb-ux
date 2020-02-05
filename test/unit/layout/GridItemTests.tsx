import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { GridItem, ThemeProvider } from '../../../lib';

suite('GridItem', (): void => {
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
          <GridItem id='grid-item'>Item</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('#grid-item');

    assert.that(item!.className).is.containing('GridItem');
  });

  test('renders defined element type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <GridItem component='span'>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('span');

    assert.that(item).is.not.null();
  });

  test('sets classes for defined property columnSpan.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <GridItem columnSpan={{ xs: 3, sm: 4, md: 5, lg: 6 }}>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containingAllOf(
      [
        'xs-columnSpan-3',
        'sm-columnSpan-4',
        'md-columnSpan-5',
        'lg-columnSpan-6'
      ]
    );
  });

  test('sets classes for defined property columnStart.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <GridItem columnStart={{ xs: 3, sm: 4, md: 5, lg: 6 }}>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containingAllOf(
      [
        'xs-columnStart-3',
        'sm-columnStart-4',
        'md-columnStart-5',
        'lg-columnStart-6'
      ]
    );
  });

  test('sets classes for defined property columnEnd.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <GridItem columnEnd={{ xs: 3, sm: 4, md: 5, lg: 6 }}>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containingAllOf(
      [
        'xs-columnEnd-3',
        'sm-columnEnd-4',
        'md-columnEnd-5',
        'lg-columnEnd-6'
      ]
    );
  });
});
