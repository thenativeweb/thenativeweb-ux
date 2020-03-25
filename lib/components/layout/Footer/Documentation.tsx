import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../documentation/Property';
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

    <Headline level='2'>Specifying the year of creation</Headline>

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

    <Headline level='2'>Adding an imprint link</Headline>

    <Paragraph>
      Optionally you may provide a <em>linkToImprint</em>. This will add
      a link to your imprint to the legal section of the footer.
    </Paragraph>

    <ComponentPreview>
      <Footer linkToImprint='/en-us/imprint' yearOfCreation={ new Date().getFullYear() } />
    </ComponentPreview>

    <Headline level='2'>Adding a privacy policy link</Headline>

    <Paragraph>
      Optionally you may provide a <em>linkToPrivacyPolicy</em>. This will add
      a link to your privacy policy to the legal section of the footer.
    </Paragraph>

    <ComponentPreview>
      <Footer linkToPrivacyPolicy='/en-us/privacy-policy' yearOfCreation={ new Date().getFullYear() } />
    </ComponentPreview>

    <Headline level='2'>Setting the font size</Headline>

    <ComponentPreview>
      <Fragment>
        <Property name='fontSize' value='sm' />

        <Footer
          fontSize='sm'
          borderTop='none'
          yearOfCreation={ new Date().getFullYear() }
        />

        <hr />

        <Property name='fontSize' value='md' />

        <Footer
          fontSize='md'
          borderTop='none'
          yearOfCreation={ new Date().getFullYear() }
        />
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Setting the color on dark background</Headline>

    <Paragraph>
      Switch the <code>color</code> property to <code>light</code> if you would
      like to place it on a <code>dark</code> background. Additionally it can make
      sense to set the <code>borderTop</code> property to <code>none</code>.
    </Paragraph>

    <ComponentPreview background='dark'>
      <Footer
        color='light'
        yearOfCreation={ new Date().getFullYear() }
        borderTop='none'
      />
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
