import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import { toArray } from '../../shared/toArray';
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
        'AdjustAuto',
        'AdjustFlex',
        'AlignItemsCenter',
        'BackgroundLight',
        'BackgroundDark',
        'JustifyContentCenter',
        'OrientationCentered',
        'OrientationHorizontal',
        'OrientationVertical',
        'ScrollableAuto'
      ]
    );
  });

  test('sets classes for defined prop adjust.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View adjust='auto'>View</View>
          <View adjust='flex'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = toArray(container.querySelectorAll('div'));
    const [ auto, flex ] = view;

    assert.that(auto).is.not.undefined();
    assert.that(auto.className).is.containing('AdjustAuto');
    assert.that(auto.className).is.not.containing('AdjustFlex');

    assert.that(flex).is.not.undefined();
    assert.that(flex.className).is.containing('AdjustFlex');
    assert.that(flex.className).is.not.containing('AdjustAuto');
  });

  test('sets classes for defined prop alignItems.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View alignItems='center'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = container.querySelector('div');

    assert.that(view).is.not.null();
    assert.that(view!.className).is.containing('AlignItemsCenter');
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
    assert.that(dark.className).is.not.containing('BackgroundLight');

    assert.that(light).is.not.undefined();
    assert.that(light.className).is.containing('BackgroundLight');
    assert.that(light.className).is.not.containing('BackgroundDark');
  });

  test('sets classes for defined prop justifyContent.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View justifyContent='center'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = container.querySelector('div');

    assert.that(view).is.not.null();
    assert.that(view!.className).is.containing('JustifyContentCenter');
  });

  test('sets classes for defined prop orientation.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View orientation='centered'>View</View>
          <View orientation='vertical'>View</View>
          <View orientation='horizontal'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = toArray(container.querySelectorAll('div'));
    const [ centered, vertical, horizontal ] = view;

    assert.that(centered).is.not.undefined();
    assert.that(centered.className).is.containing('OrientationCentered');

    assert.that(vertical).is.not.undefined();
    assert.that(vertical.className).is.containing('OrientationVertical');

    assert.that(horizontal).is.not.undefined();
    assert.that(horizontal.className).is.containing('OrientationHorizontal');
  });

  test('sets classes for defined prop scrollable.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <View scrollable='auto'>View</View>
        </ThemeProvider>,
        container
      );
    });

    const view = container.querySelector('div');

    assert.that(view).is.not.null();
    assert.that(view!.className).is.containing('ScrollableAuto');
  });
});
