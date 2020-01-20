import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { HorizontalBar, ThemeProvider } from '../../../lib';

suite('HorizontalBar', (): void => {
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
          <HorizontalBar id='component'>
            <div>Container</div>
          </HorizontalBar>
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');

    assert.that(component!.className).is.containingAllOf(
      [
        'HorizontalBar',
        'AlignStretch',
        'BackgroundLight',
        'SpaceBetweenItemsSm',
        'PaddingHorizontalMd',
        'WithBorderBottom'
      ]
    );
    assert.that(component!.className).is.not.containingAllOf(
      [
        'BackgroundDark',
        'AlignCenter',
        'AlignRight',
        'AlignLeft',
        'AlignSpaceBetween',
        'SpaceBetweenItemsMd',
        'SpaceBetweenItemsLg',
        'WithBorderTop'
      ]
    );
  });

  test('sets classes for defined properties borderTop and borderBottom.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <HorizontalBar id='borderTopFalse' borderTop={ false } />
          <HorizontalBar id='borderTopTrue' borderTop={ true } />
          <HorizontalBar id='borderBottomFalse' borderBottom={ false } />
          <HorizontalBar id='borderBottomTrue' borderBottom={ true } />
        </ThemeProvider>,
        container
      );
    });

    const borderTopFalse = container.querySelector('#borderTopFalse');
    const borderTopTrue = container.querySelector('#borderTopTrue');
    const borderBottomFalse = container.querySelector('#borderBottomFalse');
    const borderBottomTrue = container.querySelector('#borderBottomTrue');

    assert.that(borderTopFalse!.className).is.not.containing('WithBorderTop');
    assert.that(borderTopTrue!.className).is.containing('WithBorderTop');
    assert.that(borderBottomFalse!.className).is.not.containing('WithBorderBottom');
    assert.that(borderBottomTrue!.className).is.containing('WithBorderBottom');
  });

  test('sets classes for defined property background.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <HorizontalBar id='light' background='light' />
          <HorizontalBar id='dark' background='dark' />
        </ThemeProvider>,
        container
      );
    });

    const dark = container.querySelector('#dark');
    const light = container.querySelector('#light');

    assert.that(dark!.className).is.containing('BackgroundDark');
    assert.that(light!.className).is.containing('BackgroundLight');
  });

  test('sets classes for defined property align.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <HorizontalBar id='alignCenter' align='center' />
          <HorizontalBar id='alignLeft' align='left' />
          <HorizontalBar id='alignRight' align='right' />
          <HorizontalBar id='alignSpaceBetween' align='space-between' />
          <HorizontalBar id='alignStretch' align='stretch' />
        </ThemeProvider>,
        container
      );
    });

    const alignCenter = container.querySelector('#alignCenter');
    const alignLeft = container.querySelector('#alignLeft');
    const alignRight = container.querySelector('#alignRight');
    const alignStretch = container.querySelector('#alignStretch');

    assert.that(alignCenter!.className).is.containing('AlignCenter');
    assert.that(alignLeft!.className).is.containing('AlignLeft');
    assert.that(alignRight!.className).is.containing('AlignRight');
    assert.that(alignStretch!.className).is.containing('AlignStretch');
  });

  test('sets classes for defined property spaceBetweenItems.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <HorizontalBar id='spaceBetweenItemsNone' spaceBetweenItems='none' />
          <HorizontalBar id='spaceBetweenItemsSm' spaceBetweenItems='sm' />
          <HorizontalBar id='spaceBetweenItemsMd' spaceBetweenItems='md' />
          <HorizontalBar id='spaceBetweenItemsLg' spaceBetweenItems='lg' />
        </ThemeProvider>,
        container
      );
    });

    const spaceBetweenItemsNone = container.querySelector('#spaceBetweenItemsNone');
    const spaceBetweenItemsSm = container.querySelector('#spaceBetweenItemsSm');
    const spaceBetweenItemsMd = container.querySelector('#spaceBetweenItemsMd');
    const spaceBetweenItemsLg = container.querySelector('#spaceBetweenItemsLg');

    assert.that(spaceBetweenItemsNone!.className).is.containing('SpaceBetweenItemsNone');
    assert.that(spaceBetweenItemsSm!.className).is.containing('SpaceBetweenItemsSm');
    assert.that(spaceBetweenItemsMd!.className).is.containing('SpaceBetweenItemsMd');
    assert.that(spaceBetweenItemsLg!.className).is.containing('SpaceBetweenItemsLg');
  });

  test('sets classes for defined property paddingHorizontal.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <HorizontalBar id='paddingHorizontalNone' paddingHorizontal='none' />
          <HorizontalBar id='paddingHorizontalSm' paddingHorizontal='sm' />
          <HorizontalBar id='paddingHorizontalMd' paddingHorizontal='md' />
        </ThemeProvider>,
        container
      );
    });

    const paddingHorizontalNone = container.querySelector('#paddingHorizontalNone');
    const paddingHorizontalSm = container.querySelector('#paddingHorizontalSm');
    const paddingHorizontalMd = container.querySelector('#paddingHorizontalMd');

    assert.that(paddingHorizontalNone!.className).is.containing('PaddingHorizontalNone');
    assert.that(paddingHorizontalSm!.className).is.containing('PaddingHorizontalSm');
    assert.that(paddingHorizontalMd!.className).is.containing('PaddingHorizontalMd');
  });
});
