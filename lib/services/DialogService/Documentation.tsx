import { SplitView } from '../../components/documentation/SplitView';
import { Button, Code, dialogs, Headline, notifications, Paragraph } from '../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>dialogs</Headline>

    <Paragraph>
      Use the <code>dialogs</code> service to display standard dialogs, e.g.
      a confirmation dialog.
    </Paragraph>

    <Headline level='2'>Confirming a critical action</Headline>

    <Paragraph>
      To confirm a critical action, use the <code>confirm</code> function of
      the <code>notifications</code> service:
    </Paragraph>

    <SplitView>
      <Code language='tsx'>{`
        <Button
          onClick={
            async (): Promise<void> => {
              const chosenAction = await dialogs.confirm({
                title: 'Do you really want to delete the item?',
                actions: {
                  confirm: 'Delete item!',
                  cancel: 'Cancel'
                }
              });

              notifications.show({ type: 'success', text: \`You chose \${chosenAction}.\` })
            }
          }
        >
          Delete
        </Button>
      `}
      </Code>

      <Button
        onClick={
          async (): Promise<void> => {
            const chosenAction = await dialogs.confirm({
              title: 'Do you really want to delete the item?',
              actions: {
                confirm: 'Delete item!',
                cancel: 'Cancel'
              }
            });

            notifications.show({ type: 'success', text: `You chose ${chosenAction}.` });
          }
        }
      >
        Delete
      </Button>
    </SplitView>
  </React.Fragment>
);

export { Documentation };
