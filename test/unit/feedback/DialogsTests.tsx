import { act } from '../../shared/act';
import assert from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import { Dialogs } from '../../../lib/components/Dialogs';
import React from 'react';
import ReactDOM from 'react-dom';
import { dialogs, ThemeProvider } from '../../../lib';

suite('Dialogs', (): void => {
  let container: HTMLElement,
      portalRootNode: HTMLElement;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);

    portalRootNode = document.createElement('div');
    document.body.appendChild(portalRootNode);
  });

  teardown((): void => {
    document.body.removeChild(container);
    document.body.removeChild(portalRootNode);
  });

  test.only('renders dialogs into portal root node.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Dialogs portalRootNode={ portalRootNode } className='Dialogs-for-testing-1' />
        </ThemeProvider>,
        container
      );
    });

    // TODO: We need to fix this test. Currently it simply hangs without a
    // timeout and results in a printed stack trace "JavaScript heap out of
    // memory" which seems like we're
    // causing an infinite loop here.
    await Promise.all([
      new Promise((resolve, reject): void => {
        // This promise will only resolve if somebody clicked on the
        // confirm action. So we might need to change the API.
        dialogs.confirm({
          title: 'Do you want to proceed?',
          actions: {
            confirm: 'Yes, proceed!',
            cancel: 'Cancel'
          }
        }).
          then((action): void => {
            assert.that(action).is.equalTo('confirm');

            resolve();
          }).
          catch(reject);
      }),
      new Promise((resolve): void => {
        // We delay the following code so the confirm dialog can be rendered.
        setTimeout((): void => {
          const headerText = portalRootNode.querySelector<HTMLElement>('.Dialogs-for-testing-1 [class^=Headline]');

          // This assertion succeeds
          assert.that(headerText).is.equalTo('Do you want to proceed?');

          const confirmButton = portalRootNode.querySelector<HTMLElement>('#dialogs-confirm-action-confirm');

          // This line never seems to be reached
          console.log(confirmButton!.innerHTML);

          act((): void => {
            click(confirmButton!);
          });

          resolve();
        }, 500);
      })
    ]);
  });
});
