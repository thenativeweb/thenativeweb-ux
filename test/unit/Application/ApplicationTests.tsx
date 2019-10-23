import act from '../../shared/act';
import Application from '../../../lib/components/Application';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('Application', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders default applications.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = container.getElementsByTagName('div')[0];

    assert.that(application.className).is.containing('Application');
    assert.that(application.className).is.containing('OrientationHorizontal');
  });

  test('sets classes for prop orientation.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application orientation='horizontal'>Application</Application>
          <Application orientation='vertical'>Application</Application>
          <Application orientation='centered'>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = Array.prototype.slice.call(container.getElementsByTagName('div'));
    const [ typeHorizontal, typeVertical, typeCentered ] = application;

    assert.that(typeHorizontal.className).is.containing('OrientationHorizontal');
    assert.that(typeVertical.className).is.containing('OrientationVertical');
    assert.that(typeCentered.className).is.containing('OrientationCentered');
  });
});
