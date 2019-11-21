import { act } from '../../shared/act';
import { assert } from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { notifications, Notifications, ThemeProvider } from '../../../lib';
import { notStrictEqual } from 'assert';

suite('Notifications', (): void => {
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

  test('renders in defined portal root node.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Notifications portalRootNode={ portalRootNode } className='Class-for-testing-1' />
        </ThemeProvider>,
        container
      );
    });

    const notificationsDOM = portalRootNode.querySelector<HTMLElement>('.Class-for-testing-1');

    assert.that(notificationsDOM!.className).is.containing('Notifications');
  });

  test('renders error notification via service call.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Notifications portalRootNode={ portalRootNode } className='Notifications-for-testing-error' />
        </ThemeProvider>,
        container
      );
    });

    act((): void => {
      notifications.show(
        {
          type: 'error',
          text: 'This is an error!'
        }
      );
    });

    const notification = portalRootNode.querySelector<HTMLElement>('.Notifications-for-testing-error [class^=Notification]');

    assert.that(notification!.className).is.containing('TypeError');
    assert.that(notification!.textContent).is.equalTo('This is an error!');
  });

  test('renders success notification via service call.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Notifications portalRootNode={ portalRootNode } className='Notifications-for-testing-success' />
        </ThemeProvider>,
        container
      );
    });

    act((): void => {
      notifications.show(
        {
          type: 'success',
          text: 'This is a success!'
        }
      );
    });

    const notification = portalRootNode.querySelector<HTMLElement>('.Notifications-for-testing-success [class^=Notification]');

    assert.that(notification!.className).is.containing('TypeSuccess');
    assert.that(notification!.textContent).is.equalTo('This is a success!');
  });
});
