import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph, Website } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Website</Headline>
    <Paragraph>
      The <code>Website</code> component acts as your root componenent when
      building a content-driven, grid-based communication website. It will
      make sure the most basic things like fonts are available to you.
    </Paragraph>
    <Paragraph>
      If you&apos;re building an interaction-driven application use
      the <code>Application</code> component as your root component instead.
    </Paragraph>
    <ComponentPreview>
      <Website>
        <header>This header has the right font</header>
        <article>This is an article</article>
        <footer>And this is the footer</footer>
      </Website>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
