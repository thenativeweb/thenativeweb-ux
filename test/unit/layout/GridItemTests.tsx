import act from '../../shared/act';
import assert from 'assertthat';
import GridItem from '../../../lib/components/layout/GridItem';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('GridItem', (): void => {
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
          <GridItem id='some-id'>Item</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containing('GridItem');
    assert.that(item!.id).is.equalTo('some-id');
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
          <GridItem columnSpan={{ xs: 3, sm: 3, md: 3, lg: 3 }}>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containingAllOf(
      [
        'xsColumnSpan-3',
        'smColumnSpan-3',
        'mdColumnSpan-3',
        'lgColumnSpan-3'
      ]
    );
  });

  test('sets classes for defined property columnStart.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <GridItem columnStart={{ xs: 3, sm: 3, md: 3, lg: 3 }}>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containingAllOf(
      [
        'xsColumnStart-3',
        'smColumnStart-3',
        'mdColumnStart-3',
        'lgColumnStart-3'
      ]
    );
  });

  test('sets classes for defined property columnEnd.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <GridItem columnEnd={{ xs: 3, sm: 3, md: 3, lg: 3 }}>GridItem</GridItem>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('div');

    assert.that(item!.className).is.containingAllOf(
      [
        'xsColumnEnd-3',
        'smColumnEnd-3',
        'mdColumnEnd-3',
        'lgColumnEnd-3'
      ]
    );
  });
});
