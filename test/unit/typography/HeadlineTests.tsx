import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { Headline, ThemeProvider } from '../../../lib';

suite('Headline', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline>I am a headline.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = container.querySelector('h1');

    assert.that(headline).is.not.null();
    assert.that(headline!.className).is.containing('Level1');
    assert.that(headline!.className).is.not.containing('Level2');
    assert.that(headline!.textContent).is.equalTo('#I am a headline.');
  });

  test('renders an anchor with a slugified version of the headline text.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline>I am a headline.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const anchor = container.querySelector('h1 a');

    assert.that(anchor).is.not.null();
    assert.that(anchor!.getAttribute('href')).is.equalTo('#i-am-a-headline');
  });

  test('renders defined property level.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline level='1'>I am a headline.</Headline>
          <Headline level='2'>I am a headline.</Headline>
          <Headline level='3'>I am a headline.</Headline>
          <Headline level='4'>I am a headline.</Headline>
          <Headline level='5'>I am a headline.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = toArray(container.querySelectorAll('h1, h2, h3, h4, h5'));
    const [ one, two, three, four, five ] = headline;

    assert.that(one).is.not.undefined();
    assert.that(one.tagName).is.containing('H1');
    assert.that(one.className).is.containing('Level1');

    assert.that(two).is.not.undefined();
    assert.that(two.tagName).is.containing('H2');
    assert.that(two.className).is.containing('Level2');

    assert.that(three).is.not.undefined();
    assert.that(three.tagName).is.containing('H3');
    assert.that(three.className).is.containing('Level3');

    assert.that(four).is.not.undefined();
    assert.that(four.tagName).is.containing('H4');
    assert.that(four.className).is.containing('Level4');

    assert.that(five).is.not.undefined();
    assert.that(five.tagName).is.containing('H5');
    assert.that(five.className).is.containing('Level5');
  });

  test('sets defined id.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline id='some-id'>I am a headline.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = document.querySelector('#some-id');

    assert.that(headline).is.not.null();
    assert.that(headline!.id).is.equalTo('some-id');
  });
});
