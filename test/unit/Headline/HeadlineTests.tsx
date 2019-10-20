import act from '../../shared/act';
import assert from 'assertthat';
import Headline from '../../../lib/components/Headline';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('Headline', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders level 1 headlines.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline level='1'>This is a headline, Level1</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(headline.textContent).is.equalTo('This is a headline, Level1');
    assert.that(classesWithJSSIDs).is.containing('Level1');
    assert.that(classesWithJSSIDs).is.not.containing('Level2');
  });

  test('renders level 2 headlines.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline level='2'>This is a headline, Level2</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(classesWithJSSIDs).is.containing('Level2');
    assert.that(classesWithJSSIDs).is.not.containing('Level1');
  });

  test('renders level 1 headlines as default if no level is given.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Headline>This is a headline, Level1 as default.</Headline>
        </ThemeProvider>,
        container
      );
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(classesWithJSSIDs).is.containing('Level1');
    assert.that(classesWithJSSIDs).is.not.containing('Level2');
  });

  test('sets the ID correctly.', async (): Promise<void> => {
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

    assert.that(headline && headline.id).is.equalTo('some-id');
  });
});
