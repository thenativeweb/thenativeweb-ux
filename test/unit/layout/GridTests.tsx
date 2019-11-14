import act from '../../shared/act';
import assert from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, ThemeProvider } from '../../../lib';

suite('Grid', (): void => {
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
          <Grid id='some-id'>
            <div>Grid</div>
          </Grid>
        </ThemeProvider>,
        container
      );
    });

    const grid = container.querySelector('div');

    assert.that(grid!.id).is.equalTo('some-id');
    assert.that(grid!.className).is.containingAllOf(
      [
        'Grid',
        '-columnGap-2',
        '-rowGap-2'
      ]
    );
  });

  test('renders defined element type.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Grid component='span'>
            <p>Grid</p>
          </Grid>
        </ThemeProvider>,
        container
      );
    });

    const grid = container.querySelector('span');

    assert.that(grid).is.not.null();
  });

  test('sets defined columns for different sized viewports.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Grid columns={{ xs: 2, sm: 4, md: 4, lg: 2 }}>
            <div>Grid</div>
            <div>Grid</div>
          </Grid>
        </ThemeProvider>,
        container
      );
    });

    const grid = container.querySelector('div');

    assert.that(grid!.className).is.containingAllOf(
      [
        'Grid',
        'xs-columns-2',
        'sm-columns-4',
        'md-columns-4',
        'lg-columns-2'
      ]
    );
  });

  test('sets classes for defined property columnGap.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Grid columnGap='3'>
            <div>Grid</div>
            <div>Grid</div>
          </Grid>
        </ThemeProvider>,
        container
      );
    });

    const grid = container.querySelector('div');

    assert.that(grid!.className).is.containing('-columnGap-3');
  });

  test('sets classes for defined property rowGap.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Grid rowGap='3'>
            <div>Grid</div>
            <div>Grid</div>
          </Grid>
        </ThemeProvider>,
        container
      );
    });

    const grid = container.querySelector('div');

    assert.that(grid!.className).is.containing('-rowGap-3');
  });
});
