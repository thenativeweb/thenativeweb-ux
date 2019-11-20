import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { MadeBy, ThemeProvider } from '../../../lib';

suite('MadeBy', (): void => {
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
          <MadeBy />
        </ThemeProvider>,
        container
      );
    });

    const madeBy = container.querySelector('div');

    assert.that(madeBy!.className).is.containingAllOf([ 'MadeBy', 'ColorDark', 'SizeSm' ]);
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <MadeBy size='sm' />
          <MadeBy size='md' />
          <MadeBy size='lg' />
        </ThemeProvider>,
        container
      );
    });

    const madeBys = toArray(container.querySelectorAll('[class^=MadeBy]'));
    const [ small, medium, large ] = madeBys;

    assert.that(small.className).is.containing('SizeSm');
    assert.that(medium.className).is.containing('SizeMd');
    assert.that(large.className).is.containing('SizeLg');
  });

  test('sets classes for defined property color.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <MadeBy color='light' />
          <MadeBy color='dark' />
        </ThemeProvider>,
        container
      );
    });

    const madeBys = toArray(container.querySelectorAll('[class^=MadeBy]'));
    const [ light, dark ] = madeBys;

    assert.that(light.className).is.containing('ColorLight');
    assert.that(dark.className).is.containing('ColorDark');
  });

  test('inserts links according to defined property partner.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <MadeBy partner={{ href: '/some-link', name: 'some-name' }} />
        </ThemeProvider>,
        container
      );
    });

    const links = toArray(container.querySelectorAll('a'));
    const partner = links.filter((link): boolean => link.textContent === 'some-name');

    assert.that(partner).is.not.null();
  });
});
