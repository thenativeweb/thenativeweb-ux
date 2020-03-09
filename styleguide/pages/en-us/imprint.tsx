import { Styleguide } from '../../layouts/Styleguide';
import { Headline, Link, Paragraph } from '../../../lib';
import React, { ReactElement } from 'react';

/* eslint-disable react/jsx-child-element-spacing */
export default (): ReactElement => (
  <Styleguide>
    <Headline>Imprint</Headline>

    <Paragraph>
      <strong>the native web GmbH</strong><br />
      Hauptstraße 8<br />
      79359 Riegel am Kaiserstuhl<br />
      Germany
    </Paragraph>

    <Paragraph>
      Managing partners are Susanna Roden, Stefan Brandys and Golo Roden
    </Paragraph>

    <Paragraph>
      Phone +49 177 3373175<br />
      Mail <Link href='mailto:hello@thenativeweb.io'>hello@thenativeweb.io</Link><br />
      Twitter <Link href='https://twitter.com/thenativeweb'>@thenativeweb</Link><br />
      GitHub <Link href='https://github.com/thenativeweb'>thenativeweb</Link>
    </Paragraph>

    <Paragraph>
      IBAN DE78 6001 0070 0946 4157 06<br />
      BIC PBNKDEFF
    </Paragraph>

    <Paragraph>
      Registry court is Freiburg im Breisgau, Germany<br />
      Commercial register HRB 709303<br />
      German VAT no. DE 287 040 877
    </Paragraph>

    <Paragraph>
      Registered office is Riegel am Kaiserstuhl, Germany
    </Paragraph>

    <Paragraph>
      Responsible for content in accordance with § 55 section 2 RStV is the native web GmbH, address as above
    </Paragraph>
  </Styleguide>
);
/* eslint-eanble react/jsx-child-element-spacing */
