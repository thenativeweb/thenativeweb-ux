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
    <NextLink href='/components/input/button'>Button</NextLink>
  </React.Fragment>
);

export default Page;
