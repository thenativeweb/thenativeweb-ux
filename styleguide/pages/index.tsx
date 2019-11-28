import {
  Headline
} from '../../lib';
import NextLink from 'next/link';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <React.Fragment>
    <Headline>thenativeweb-ux</Headline>
    <p>thenativeweb-ux provides UI components for the native web applications.</p>
    <Headline level='2'>Input</Headline>
    <ul>
      <li><NextLink href='/components/input/button'>Button</NextLink></li>
      <li><NextLink href='/components/input/checkbox'>CheckBox</NextLink></li>
      <li><NextLink href='/components/input/textbox'>TextBox</NextLink></li>
    </ul>

    <Headline level='2'>Layout</Headline>
    <ul>
      <li><NextLink href='/components/layout/grid'>Grid</NextLink></li>
    </ul>
  </React.Fragment>
);

export default Page;
