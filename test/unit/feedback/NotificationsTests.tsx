import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../../lib/utils/toArray';
import { Notification, NotificationService } from '../../../lib/services/NotificationService';
import { Notifications, ThemeProvider } from '../../../lib';

suite('Notifications', (): void => {
  let container: HTMLElement,
      notificationService: NotificationService,
      portalRootNode: HTMLElement;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);

    portalRootNode = document.createElement('div');
    document.body.appendChild(portalRootNode);

    notificationService = new NotificationService();
  });

  teardown(async (): Promise<void> => {
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

  test('renders an error notification if it is added to the given notificationService.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Notifications portalRootNode={ portalRootNode } notificationService={ notificationService } className='Notifications-for-testing-error' />
        </ThemeProvider>,
        container
      );
    });

    act((): void => {
      notificationService.addNotification({ type: 'error', text: 'This is an error!', duration: 200 });
    });

    const notification = portalRootNode.querySelector<HTMLElement>('.Notifications-for-testing-error [class*=TypeError]');

    assert.that(notification!.textContent).is.equalTo('This is an error!');
  });

  test('renders a success notification if it is added to the given notificationService.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Notifications portalRootNode={ portalRootNode } notificationService={ notificationService } className='Notifications-for-testing-success' />
        </ThemeProvider>,
        container
      );
    });

    act((): void => {
      act((): void => {
        notificationService.addNotification({ type: 'success', text: 'This is a success!', duration: 200 });
      });
    });

    const notification = portalRootNode.querySelector<HTMLElement>('.Notifications-for-testing-success [class*=TypeSuccess]');

    assert.that(notification!.className).is.containing('TypeSuccess');
    assert.that(notification!.textContent).is.equalTo('This is a success!');
  });

  test('removes a notification from the DOM, if it is removed from the given notificationService.', async (): Promise<void> => {
    let notificationObject: Notification;

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Notifications portalRootNode={ portalRootNode } notificationService={ notificationService } className='Notifications-for-testing-removes-notification' />
        </ThemeProvider>,
        container
      );
    });

    act((): void => {
      notificationObject = notificationService.addNotification({ type: 'success', text: 'This will be removed!', duration: 200 });
    });

    const notification = portalRootNode.querySelector<HTMLElement>('.Notifications-for-testing-removes-notification [class*=TypeSuccess]');

    assert.that(notification!.className).is.containing('TypeSuccess');
    assert.that(notification!.textContent).is.equalTo('This will be removed!');

    notificationService.removeNotification(notificationObject!);

    // We wait 300 ms to wait for the transition animation to be finished.
    await new Promise<void>((resolve): void => {
      setTimeout(resolve, 500);
    });

    const notifications = toArray(portalRootNode.querySelectorAll<HTMLElement>('.Notifications-for-testing-removes-notification [class*=TypeSuccess]'));

    assert.that(notifications.length).is.equalTo(0);
  });
});
