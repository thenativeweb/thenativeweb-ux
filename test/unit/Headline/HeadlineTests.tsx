import act from '../../shared/act';
import assert from 'assertthat';
import Headline from '../../../lib/components/Headline';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';
import toArray from '../../shared/toArray';

suite('Headline', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders level 1 although no level has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline>This is a headline, Level1.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = container.querySelector('div');

    assert.that(headline!.className).is.not.null();
    assert.that(headline!.className).is.containing('Level1');
    assert.that(headline!.className).is.not.containing('Level2');
    assert.that(headline!.textContent).is.equalTo('This is a headline, Level1.');
  });

  test('sets classes for prop level.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline level='1'>This is a headline, Level1</Headline>
          <Headline level='2'>This is a headline, Level2</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = toArray(container.querySelectorAll('div'));
    const [ one, two ] = headline;

    assert.that(one).is.not.undefined();
    assert.that(one.className).is.containing('Level1');

    assert.that(two).is.not.undefined();
    assert.that(two.className).is.containing('Level2');
    assert.that(two.className).is.not.containing('Level1');
  });

  test('sets defined ID.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline id='some-id'>This is a headline with some-id.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = document.getElementById('some-id');

    assert.that(headline).is.not.null();
    assert.that(headline!.id).is.equalTo('some-id');
  });
});
