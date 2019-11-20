import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Product, ThemeProvider } from '../../../lib';

suite('Product', (): void => {
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
          <Product />
        </ThemeProvider>,
        container
      );
    });

    const product = container.querySelector('div');

    assert.that(product!.className).is.containingAllOf([ 'Product', 'SizeMd' ]);
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Product size='md' />
          <Product size='lg' />
          <Product size='xl' />
        </ThemeProvider>,
        container
      );
    });

    const products = toArray(container.querySelectorAll('[class^=Product]'));
    const [ medium, large, xLarge ] = products;

    assert.that(medium.className).is.containing('SizeMd');
    assert.that(large.className).is.containing('SizeLg');
    assert.that(xLarge.className).is.containing('SizeXl');
  });

  test('renders text and logo according to defined property type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Product type='default' />
          <Product type='text-only' />
          <Product type='logo-only' />
        </ThemeProvider>,
        container
      );
    });

    const products = toArray(container.querySelectorAll('[class^=Product]'));
    const [ standard, textOnly, logoOnly ] = products;

    assert.that(standard.querySelector('[class^=LogoTheNativeWeb]')).is.not.null();
    assert.that(standard.querySelector('[class^=Name]')).is.not.null();

    assert.that(textOnly.querySelector('[class^=Name]')).is.not.null();
    assert.that(textOnly.querySelector('[class^=LogoTheNativeWeb]')).is.null();

    assert.that(logoOnly.querySelector('[class^=LogoTheNativeWeb]')).is.not.null();
    assert.that(logoOnly.querySelector('[class^=Name]')).is.null();
  });

  test('passes through defined property isAnimated if property name is set to wolkenkit.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Product name='wolkenkit' isAnimated={ true } />
          <Product name='wolkenkit' isAnimated={ false } />
          <Product isAnimated={ true } />
        </ThemeProvider>,
        container
      );
    });

    const products = toArray(container.querySelectorAll('[class^=Product]'));
    const [ wolkenkitAnimated, wolkenkitStatic, tnwAnimated ] = products;

    assert.that(wolkenkitAnimated.querySelector('[class^=MovingCloudAnimated]')).is.not.null();
    assert.that(wolkenkitStatic.querySelector('[class^=MovingCloudAnimated]')).is.null();
    assert.that(tnwAnimated.querySelector('[class^=MovingCloudAnimated]')).is.null();
  });

  test('sets classes for defined property name.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Product name='wolkenkit' />
          <Product name='name-for-testing' />
        </ThemeProvider>,
        container
      );
    });

    const products = toArray(container.querySelectorAll('[class^=Product]'));
    const [ wolkenkit, other ] = products;

    assert.that(wolkenkit.querySelector('[class^=CompositeName]')).is.not.null();
    assert.that(other.querySelector('[class^=CompositeName]')).is.null();
  });
});
