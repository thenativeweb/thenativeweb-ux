import act from '../../shared/act';
import Application from '../../../lib/components/Application';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import toArray from '../../shared/toArray';

suite('Application', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no prop has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = container.querySelector('div');

    assert.that(application).is.not.null();
    assert.that(application!.className).is.containingAllOf([ 'Application', 'DirectionHorizontal' ]);
  });

  test('sets classes for prop direction.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application direction='horizontal'>Application</Application>
          <Application direction='vertical'>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = toArray(container.querySelectorAll('div'));
    const [ horizontal, vertical ] = application;

    assert.that(horizontal).is.not.undefined();
    assert.that(horizontal.className).is.containing('DirectionHorizontal');

    assert.that(vertical).is.not.undefined();
    assert.that(vertical.className).is.containing('DirectionVertical');
  });

  test('sets classes for prop contentPosition.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Application contentPosition='centered'>Application</Application>
        </ThemeProvider>,
        container
      );
    });

    const application = container.querySelector('div');

    assert.that(application).is.not.null();
    assert.that(application!.className).is.containing('ContentCenter');
  });
});
