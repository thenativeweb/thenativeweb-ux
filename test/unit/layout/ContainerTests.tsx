import act from '../../shared/act';
import assert from 'assertthat';
import { Container } from '../../../lib/components/layout/Container';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import toArray from '../../shared/toArray';

suite('layout/Container', (): void => {
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
        'BackgroundGray',
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
          <Container id='some-id' background='gray'>
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

    assert.that(gray.className).is.containing('BackgroundGray');
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
          <Container id='some-id' isScrollable={ true }>
            <div>Container</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = container.querySelector('#some-id');

    assert.that(containerDiv!.className).is.containing('IsScrollable');
  });

  test('sets classes for defined property isRow.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Container id='some-id' isRow={ true }>
            <div>Child</div>
            <div>Child</div>
          </Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = container.querySelector('#some-id');

    assert.that(containerDiv!.className).is.containing('IsRow');
  });
});
