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

  test('renders dialogs into portal root node.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Dialogs portalRootNode={ portalRootNode } className='Dialogs-for-testing-1' />
        </ThemeProvider>,
        container
      );
    });

    await Promise.all([
      new Promise((resolve, reject): void => {
        // This promise only resolves if the confirm button inside the dialog
        // has been clicked.
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
        // We delay the following code so the confirm dialog can be rendered
        // first.
        setTimeout((): void => {
          const headerText = portalRootNode.querySelector<HTMLElement>('.Dialogs-for-testing-1 [class^=Headline]');

          assert.that(headerText!.textContent).is.equalTo('Do you want to proceed?');

          const confirmButton = portalRootNode.querySelector<HTMLElement>('#dialogs-confirm-action-confirm');

          act((): void => {
            click(confirmButton!);
          });

          resolve();
        }, 100);
      })
    ]);
  });
});
