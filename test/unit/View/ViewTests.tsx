import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import View from '../../../lib/components/View';

const makeArray = (arrayLike: NodeListOf<HTMLElement>): any[] => Array.prototype.slice.call(arrayLike);

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

    assert.that(view && view.className).is.containing('View');
    assert.that(view && view.className).is.not.containingAllOf(
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

    const view = makeArray(container.querySelectorAll('div'));
    const [ adjustAuto, adjustFlex ] = view;

    assert.that(adjustAuto).is.not.undefined();
    assert.that(adjustFlex).is.not.undefined();

    assert.that(adjustAuto && adjustAuto.className).is.containing('AdjustAuto');
    assert.that(adjustAuto && adjustAuto.className).is.not.containing('AdjustFlex');
    assert.that(adjustFlex && adjustFlex.className).is.containing('AdjustFlex');
    assert.that(adjustFlex && adjustFlex.className).is.not.containing('AdjustAuto');
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

    assert.that(view && view.className).is.containing('AlignItemsCenter');
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

    const view = makeArray(container.querySelectorAll('div'));
    const [ backgroundDark, backgroundLight ] = view;

    assert.that(backgroundDark).is.not.undefined();
    assert.that(backgroundLight).is.not.undefined();

    assert.that(backgroundDark.className).is.containing('BackgroundDark');
    assert.that(backgroundDark.className).is.not.containing('BackgroundLight');
    assert.that(backgroundLight.className).is.containing('BackgroundLight');
    assert.that(backgroundLight.className).is.not.containing('BackgroundDark');
  });

  test('sets classes for prop justifyContent.', async (): Promise<void> => {
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

    assert.that(view && view.className).is.containing('JustifyContentCenter');
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

    const view = makeArray(container.querySelectorAll('div'));
    const [ orientationCentered, orientationVertical, orientationHorizontal ] = view;

    assert.that(orientationCentered).is.not.undefined();
    assert.that(orientationVertical).is.not.undefined();
    assert.that(orientationHorizontal).is.not.undefined();

    assert.that(orientationCentered.className).is.containing('OrientationCentered');
    assert.that(orientationCentered.className).is.not.containing('OrientationVertical');
    assert.that(orientationCentered.className).is.not.containing('OrientationHorizontal');
    assert.that(orientationVertical.className).is.containing('OrientationVertical');
    assert.that(orientationVertical.className).is.not.containing('OrientationCentered');
    assert.that(orientationVertical.className).is.not.containing('OrientationHorizontal');
    assert.that(orientationHorizontal.className).is.containing('OrientationHorizontal');
    assert.that(orientationHorizontal.className).is.not.containing('OrientationCentered');
    assert.that(orientationHorizontal.className).is.not.containing('OrientationVertical');
  });

  test('sets classes for prop scrollable.', async (): Promise<void> => {
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

    assert.that(view && view.className).is.containing('ScrollableAuto');
  });
});
