import { SplitView } from '../../components/documentation/SplitView';
import { Button, Code, Headline, notifications, Paragraph } from '../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>notifications</Headline>

    <Paragraph>
      Use the <code>notifications</code> service to inform the user about events
      without blocking his current worfklow. Notifications will only be visible
      for a short period of time and won&aops;t be persisted.
    </Paragraph>

    <Headline level='2'>Showing a notification</Headline>

    <Paragraph>
      To add a notifiction to the stack, use the <code>show</code> function of
      the <code>notifications</code> service:
    </Paragraph>

    <SplitView>
      <Code language='jsx'>{`
        <Button
          onClick={
            (): void => notifications.show({
              type: 'success',
              text: 'This is a notification!'
            })
          }
        >
          Show Notification
        </Button>
      `}
      </Code>

      <Button
        onClick={
          (): void => notifications.show({
            type: 'success',
            text: 'This is a notification!'
          })
        }
      >
        Show Notification
      </Button>
    </SplitView>

    <Headline level='2'>Success or error</Headline>

    <Paragraph>
      Use the <code>type</code> option to notify about the user about
      an <code>error</code> or a <code>success</code>.
    </Paragraph>

    <SplitView>
      <Code language='jsx'>{`
        <Button
          onClick={
            (): void => notifications.show({
              type: 'success',
              text: 'This is a notification!'
            })
          }
        >
          Show Notification
        </Button>
      `}
      </Code>
      <React.Fragment>
        <Button
          onClick={
            (): void => notifications.show({
              type: 'error',
              text: 'This is an error!'
            })
          }
        >
          Inform about error!
        </Button>
        <Button
          onClick={
            (): void => notifications.show({
              type: 'success',
              text: 'This is a success!'
            })
          }
        >
          Inform about success!
        </Button>
      </React.Fragment>
    </SplitView>
  </React.Fragment>
);

export { Documentation };
