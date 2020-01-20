import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Footer, Headline, Paragraph } from '../../..';
import React, { Fragment, ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Footer</Headline>

    <Paragraph>
      A <code>Footer</code> can be used to present important legal information
      at the bottom of a page layout.
    </Paragraph>

    <ComponentPreview>
      <Footer yearOfCreation={ new Date().getFullYear() } />
    </ComponentPreview>

    <Headline level='2'>Year of creation</Headline>

    <Paragraph>
      You need to set the <em>yearOfCreation</em> property in order to define the copyright
      timespan that will be generated automatically.
    </Paragraph>

    <ComponentPreview>
      <Fragment>
        <Footer yearOfCreation={ 2016 } />
        <Footer yearOfCreation={ new Date().getFullYear() } />
      </Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
