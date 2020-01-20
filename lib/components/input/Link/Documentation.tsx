import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Link, notifications, Paragraph } from '../../..';
import React, { MouseEvent, ReactElement } from 'react';

const handleClick = (event: MouseEvent): void => {
  event.preventDefault();

  notifications.show({ type: 'success', text: `onClick(event: MouseEvent)` });
};

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Link</Headline>

    <ComponentPreview>
      <Link
        href='/internal'
      >
        This an interal link
      </Link>
    </ComponentPreview>

    <Headline level='2'>External links</Headline>

    <Paragraph>
      When linking to external websites, make sure to
      set <code>isExternal</code> to <code>true</code>. This will
      set <code>rel</code> and <code>target</code> attributes
      properly.
    </Paragraph>

    <ComponentPreview>
      <Link
        href='https://www.thenativeweb.io'
        isExternal={ true }
      >
        This an external link
      </Link>
    </ComponentPreview>

    <Headline level='2'>Intercepting click events</Headline>

    <ComponentPreview>
      <Link
        href='https://www.thenativeweb.io'
        onClick={ handleClick }
      >
        This a link with an onClick handler
      </Link>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
