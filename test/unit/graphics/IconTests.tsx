import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Icon, ThemeProvider } from '../../../lib';

suite('Icon', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with defined required property.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Icon name='some-name' />
        </ThemeProvider>,
        container
      );
    });

    const icon = container.querySelector<SVGElement>('svg');

    assert.that(icon).is.not.null();
    assert.that(icon!.className.baseVal).is.containingAllOf([ 'Icon', 'ColorDefault', 'SizeSm' ]);
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Icon name='some-name' className='Icon-for-testing' size='xs' />
          <Icon name='some-name' className='Icon-for-testing' size='sm' />
          <Icon name='some-name' className='Icon-for-testing' size='md' />
          <Icon name='some-name' className='Icon-for-testing' size='lg' />
          <Icon name='some-name' className='Icon-for-testing' size='xl' />
          <Icon name='some-name' className='Icon-for-testing' size='xxl' />
        </ThemeProvider>,
        container
      );
    });

    const icons = toArray(container.querySelectorAll<SVGElement>('.Icon-for-testing'));
    const [ xSmall, small, medium, large, xLarge, xxLarge ] = icons;

    assert.that(xSmall.className.baseVal).is.containing('SizeXs');
    assert.that(small.className.baseVal).is.containing('SizeSm');
    assert.that(medium.className.baseVal).is.containing('SizeMd');
    assert.that(large.className.baseVal).is.containing('SizeLg');
    assert.that(xLarge.className.baseVal).is.containing('SizeXl');
    assert.that(xxLarge.className.baseVal).is.containing('SizeXxl');
  });

  test('sets classes for defined property color.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Icon name='some-name' className='Icon-for-testing' color='default' />
          <Icon name='some-name' className='Icon-for-testing' color='current' />
          <Icon name='some-name' className='Icon-for-testing' color='highlight' />
          <Icon name='some-name' className='Icon-for-testing' color='white' />
        </ThemeProvider>,
        container
      );
    });

    const icons = toArray(container.querySelectorAll<SVGElement>('.Icon-for-testing'));
    const [ standard, current, highlight, white ] = icons;

    assert.that(standard.className.baseVal).is.containing('ColorDefault');
    assert.that(current.className.baseVal).is.containing('ColorCurrent');
    assert.that(highlight.className.baseVal).is.containing('ColorHighlight');
    assert.that(white.className.baseVal).is.containing('ColorWhite');
  });

  test('sets classes for defined property type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Icon name='some-name' className='Icon-for-testing' type='inline' />
          <Icon name='some-name' className='Icon-for-testing' type='flex-auto' />
        </ThemeProvider>,
        container
      );
    });

    const [ inline, flex ] = toArray(container.querySelectorAll<SVGElement>('.Icon-for-testing'));

    assert.that(inline.className.baseVal).is.containing('TypeInline');
    assert.that(flex.className.baseVal).is.containing('TypeFlex');
  });
});
