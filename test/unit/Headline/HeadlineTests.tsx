import act from '../../shared/act';
import assert from 'assertthat';
import Headline from '../../../lib/components/Headline';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../../../lib/components/ThemeProvider';

suite('Headline component', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('REACTDOM - Level 1 is set correct.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(<ThemeProvider><Headline level='1'>This is a headline, Level1</Headline></ThemeProvider>, container);
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(headline.textContent).is.equalTo('This is a headline, Level1');
    assert.that(classesWithJSSIDs.indexOf('Level1')).is.greaterThan(-1);
    assert.that(classesWithJSSIDs.indexOf('Level2')).is.equalTo(-1);
  });

  test('REACTDOM - Level 2 is set correct.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(<ThemeProvider><Headline level='2'>This is a headline, Level2</Headline></ThemeProvider>, container);
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(headline.textContent).is.equalTo('This is a headline, Level2');
    assert.that(classesWithJSSIDs.indexOf('Level2')).is.greaterThan(-1);
    assert.that(classesWithJSSIDs.indexOf('Level1')).is.equalTo(-1);
  });

  test('REACTDOM - Level 1 as default is set correct, when no level was given.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(<ThemeProvider><Headline>This is a headline, Level1 as default.</Headline></ThemeProvider>, container);
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(headline.textContent).is.equalTo('This is a headline, Level1 as default.');
    assert.that(classesWithJSSIDs.indexOf('Level1')).is.greaterThan(-1);
    assert.that(classesWithJSSIDs.indexOf('Level2')).is.equalTo(-1);
  });

  test('REACTDOM - Level 1 as default is set correct, when undefined level was given.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(<ThemeProvider><Headline level={ undefined }>This is a headline, Level1 when undefined was given.</Headline></ThemeProvider>, container);
    });

    const headline = container.getElementsByTagName('div')[0];
    const classesWithJSSIDs = headline.className;

    assert.that(headline.textContent).is.equalTo('This is a headline, Level1 when undefined was given.');
    assert.that(classesWithJSSIDs.indexOf('Level1')).is.greaterThan(-1);
    assert.that(classesWithJSSIDs.indexOf('Level2')).is.equalTo(-1);
  });

  test('REACTDOM - Id is set correct.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(<ThemeProvider><Headline id='111'>This is a headline, Level1 when undefined was given.</Headline></ThemeProvider>, container);
    });

    const headline = document.getElementById('111');

    assert.that(headline).is.not.null();

    assert.that(headline && headline.id).is.equalTo('111');
  });
});
