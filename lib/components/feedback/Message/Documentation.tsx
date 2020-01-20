import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Message, Paragraph } from '../../..';
import React, { Fragment, ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Message</Headline>

    <Paragraph>
      The <code>Message</code> component is used to focus the user&apos;s
      attention to a specific issue without interrupting his current workflow.
      It is displayed inline, right above the origin of the error or the info.
    </Paragraph>

    <ComponentPreview>
      <Fragment>
        <Message type='error'>
          This is a wonderful error!
        </Message>

        <Message type='info'>
          This is an info…
        </Message>
      </Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
