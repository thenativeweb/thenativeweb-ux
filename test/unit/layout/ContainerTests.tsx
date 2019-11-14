import { act } from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Container, ThemeProvider } from '../../../lib';

suite('Container', (): void => {
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
          <Container id='some-id'>
            <div>Container</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = container.querySelector('div');

    assert.that(containerDiv!.className).is.containingAllOf(
      [
        'Container',
        'BackgroundNone',
        'HorizontalCenter',
        'VerticalCenter'
      ]
    );
    assert.that(containerDiv!.className).is.not.containingAllOf(
      [
        'BackgroundDark',
        'BackgroundLight',
        'HorizontalLeft',
        'HorizontalRight',
        'HorizontalStretch',
        'IsRow',
        'IsScrollable',
        'VerticalStretch',
        'VerticalTop',
        'VerticalBottom'
      ]
    );
    assert.that(containerDiv!.id).is.equalTo('some-id');
  });

  test('sets classes for defined property background.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Container id='some-id' background='light'>
            <div>Container</div>
          </Container>
          <Container id='some-id' background='dark'>
            <div>Container</div>
          </Container>
          <Container id='some-id' background='none'>
            <div>Container</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = toArray(container.querySelectorAll('#some-id'));
    const [ gray, dark, none ] = containerDiv;

    assert.that(gray.className).is.containing('BackgroundLight');
    assert.that(dark.className).is.containing('BackgroundDark');
    assert.that(none.className).is.containing('BackgroundNone');
  });

  test('sets classes for defined property horizontal.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Container id='some-id' horizontal='left'>
            <div>Container</div>
          </Container>
          <Container id='some-id' horizontal='right'>
            <div>Container</div>
          </Container>
          <Container id='some-id' horizontal='center'>
            <div>Container</div>
          </Container>
          <Container id='some-id' horizontal='stretch'>
            <div>Container</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = toArray(container.querySelectorAll('#some-id'));
    const [ left, right, center, stretch ] = containerDiv;

    assert.that(left.className).is.containing('HorizontalLeft');
    assert.that(right.className).is.containing('HorizontalRight');
    assert.that(center.className).is.containing('HorizontalCenter');
    assert.that(stretch.className).is.containing('HorizontalStretch');
  });

  test('sets classes for defined property vertical.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Container id='some-id' vertical='top'>
            <div>Container</div>
          </Container>
          <Container id='some-id' vertical='bottom'>
            <div>Container</div>
          </Container>
          <Container id='some-id' vertical='center'>
            <div>Container</div>
          </Container>
          <Container id='some-id' vertical='stretch'>
            <div>Container</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = toArray(container.querySelectorAll('#some-id'));
    const [ top, bottom, center, stretch ] = containerDiv;

    assert.that(top.className).is.containing('VerticalTop');
    assert.that(bottom.className).is.containing('VerticalBottom');
    assert.that(center.className).is.containing('VerticalCenter');
    assert.that(stretch.className).is.containing('VerticalStretch');
  });

  test('sets classes for defined property isScrollable.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Container className='container' isScrollable={ true }>
            <div>Container</div>
          </Container>
          <Container className='container' isScrollable={ false }>
            <div>Container</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const [ scrollable, nonScrollable ] = toArray(container.querySelectorAll('.container'));

    assert.that(scrollable.className).is.containing('IsScrollable');
    assert.that(nonScrollable.className).is.containing('IsNotScrollable');
  });
});
