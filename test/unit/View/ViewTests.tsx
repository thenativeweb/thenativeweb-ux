import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import toArray from '../../shared/toArray';
import View from '../../../lib/components/View';

suite('View', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no props has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = container.querySelector('div');

    assert.that(view).is.not.null();
    assert.that(view!.className).is.containing('View');
    assert.that(view!.className).is.not.containingAllOf(
      [
        'ResizeFlexible',
        'ResizeNone',
        'BackgroundLight',
        'BackgroundDark',
        'ContentCenter',
        'DirectionHorizontal',
        'DirectionVertical',
        'ScrollableAuto',
        'ScrollableNone'
      ]
    );
  });

  test('sets classes for defined prop background.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View background='dark'>View</View>
          <View background='light'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = toArray(container.querySelectorAll('div'));
    const [ dark, light ] = view;

    assert.that(dark).is.not.undefined();
    assert.that(dark.className).is.containing('BackgroundDark');

    assert.that(light).is.not.undefined();
    assert.that(light.className).is.containing('BackgroundLight');
  });

  test('sets classes for defined prop direction.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View direction='vertical'>View</View>
          <View direction='horizontal'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = toArray(container.querySelectorAll('div'));
    const [ vertical, horizontal ] = view;

    assert.that(vertical).is.not.undefined();
    assert.that(vertical.className).is.containing('DirectionVertical');

    assert.that(horizontal).is.not.undefined();
    assert.that(horizontal.className).is.containing('DirectionHorizontal');
  });

  test('sets classes for defined prop contentPosition.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View contentPosition='centered'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = container.querySelector('div');

    assert.that(view).is.not.null();
    assert.that(view!.className).is.containing('ContentCenter');
  });

  test('sets classes for defined prop isResizable.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View isResizable={ false }>View</View>
          <View isResizable={ true }>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = toArray(container.querySelectorAll('div'));
    const [ none, flexible ] = view;

    assert.that(none).is.not.undefined();
    assert.that(none.className).is.containing('ResizeNone');

    assert.that(flexible).is.not.undefined();
    assert.that(flexible.className).is.containing('ResizeFlexible');
  });

  test('sets classes for defined prop isScrollable.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View isScrollable={ true }>View</View>
          <View isScrollable={ false }>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = toArray(container.querySelectorAll('div'));
    const [ truthy, falsy ] = view;

    assert.that(truthy).is.not.undefined();
    assert.that(truthy.className).is.containing('ScrollableAuto');

    assert.that(falsy).is.not.undefined();
    assert.that(falsy.className).is.containing('ScrollableNone');
  });
});
