import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Space, ThemeProvider } from '../../../lib';

suite('Space', (): void => {
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
          <Space id='component'>Content</Space>
        </ThemeProvider>,
        container
      );
    });

    const item = container.querySelector('#component');

    assert.that(item!.className).is.containing('Space');
    assert.that(item!.textContent).is.equalTo('Content');
  });

  test('sets both non-responsive and responsive classes for defined property padding.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Space id='non-responsive' padding='3'>Space</Space>
          <Space id='responsive' padding={{ xs: 3, sm: 4, md: 5, lg: 6 }}>Space</Space>
        </ThemeProvider>,
        container
      );
    });

    const nonResponsive = container.querySelector('#non-responsive');
    const responsive = container.querySelector('#responsive');

    assert.that(nonResponsive!.className).is.containing(' -padding-3');

    assert.that(responsive!.className).is.containingAllOf(
      [
        'xs-padding-3',
        'sm-padding-4',
        'md-padding-5',
        'lg-padding-6'
      ]
    );
  });

  test('sets both non-responsive and responsive classes for defined property between.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Space id='non-responsive' between='3'>Space</Space>
          <Space id='responsive' between={{ xs: 3, sm: 4, md: 5, lg: 6 }}>Space</Space>
        </ThemeProvider>,
        container
      );
    });

    const nonResponsive = container.querySelector('#non-responsive');
    const responsive = container.querySelector('#responsive');

    assert.that(nonResponsive!.className).is.containing(' -between-3');

    assert.that(responsive!.className).is.containingAllOf(
      [
        'xs-between-3',
        'sm-between-4',
        'md-between-5',
        'lg-between-6'
      ]
    );
  });

  test('adds custom className.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Space id='space' className='custom-class'>Space</Space>
        </ThemeProvider>,
        container
      );
    });

    const space = container.querySelector('#space');

    assert.that(space!.className).is.containing('custom-class');
  });
});
