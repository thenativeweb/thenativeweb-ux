import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Paragraph</Headline>

    <Paragraph>
      If you need to display longer running text that also may
      contain <code>strong</code>, <code>em</code> and <code>code</code> tags
      use the <code>Paragraph</code> commponent.
    </Paragraph>
    <ComponentPreview>
      <React.Fragment>
        <Paragraph>
          <em>Emphasized lorem ipsum</em> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. <strong>Strong lorem ipsum</strong> dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          est Lorem ipsum dolor sit amet.
        </Paragraph>
        <Paragraph>
          <code>Codified lorem ipsum</code> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Paragraph>
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
