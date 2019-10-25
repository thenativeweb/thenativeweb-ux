import act from '../../shared/act';
import assert from 'assertthat';
import { Container } from '../../../lib/components/layout/Container';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

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
          <Container id='some-id'>Application</Container>
        </ThemeProvider>,
        container
      );
    });

    const containerDiv = container.querySelector('div');

    assert.that(containerDiv!.className).is.containing('Container');
    assert.that(containerDiv!.className).is.containing('BackgroundNone');
    assert.that(containerDiv!.className).is.containing('HorizontalCenter');
    assert.that(containerDiv!.className).is.containing('VerticalCenter');
    assert.that(containerDiv!.id).is.equalTo('some-id');
  });
});
