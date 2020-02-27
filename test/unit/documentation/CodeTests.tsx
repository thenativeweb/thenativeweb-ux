import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { Code, ThemeProvider } from '../../../lib';

suite('Code', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders children as JavaScript code although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Code id='code'>{`
            const message = 'This is JavaScript code!';

            console.log(message);
          `}
          </Code>
        </ThemeProvider>,
        container
      );
    });

    const codeBlock = container.querySelector('#code');

    assert.that(codeBlock!.tagName).is.equalTo('DIV');
    assert.that(codeBlock!.className).is.containing('Code');
    assert.that(codeBlock!.id).is.equalTo('code');
    assert.that(codeBlock!.innerHTML).is.matching(/<span class="token console".*>console<\/span>/u);
  });

  test('renders children as TypeScript code if property language is set to typescript.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Code id='code' language='typescript'>{`
            const message: string = 'This is TypeScript code!';

            console.log(message);
          `}
          </Code>
        </ThemeProvider>,
        container
      );
    });

    const codeBlock = container.querySelector('#code');

    assert.that(codeBlock!.innerHTML).is.matching(/<span class="token".*>string<\/span>/u);
  });

  test('renders children as shell code if property language is set to shell.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Code id='code' language='shell'>{`
            # This is a comment

            $ npm run install
          `}
          </Code>
        </ThemeProvider>,
        container
      );
    });

    const codeBlock = container.querySelector('#code');

    assert.that(codeBlock!.innerHTML).is.matching(/<span class="token".*># This is a comment<\/span>/u);
  });

  test('renders children as inline code element when type is set to inline.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Code id='code' type='inline'>inlineCode</Code>
        </ThemeProvider>,
        container
      );
    });

    const codeBlock = container.querySelector('#code');

    assert.that(codeBlock!.tagName).is.equalTo('CODE');
  });
});
