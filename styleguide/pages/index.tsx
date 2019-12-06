import NextLink from 'next/link';
import {
  Headline,
  Paragraph
} from '../../lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <React.Fragment>
    <Headline>thenativeweb-ux</Headline>
    <Paragraph>thenativeweb-ux provides UI components for the native web applications.</Paragraph>

    <Headline level='2'>Components</Headline>

    <Headline level='3'>Roots</Headline>
    <ul>
      <li><NextLink href='/components/roots/application'>Application</NextLink></li>
      <li><NextLink href='/components/roots/website'>Website</NextLink></li>
    </ul>

    <Headline level='3'>Layout</Headline>
    <ul>
      <li><NextLink href='/components/layout/container'>Container</NextLink></li>
      <li><NextLink href='/components/layout/grid'>Grid</NextLink></li>
    </ul>

    <Headline level='3'>Branding</Headline>

    <Headline level='3'>Typography</Headline>
    <ul>
      <li><NextLink href='/components/typography/headline'>Headline</NextLink></li>
      <li><NextLink href='/components/typography/paragraph'>Paragraph</NextLink></li>
      <li><NextLink href='/components/typography/text'>Text</NextLink></li>
    </ul>

    <Headline level='3'>Graphics</Headline>

    <Headline level='3'>Input</Headline>
    <ul>
      <li><NextLink href='/components/input/button'>Button</NextLink></li>
      <li><NextLink href='/components/input/checkbox'>CheckBox</NextLink></li>
      <li><NextLink href='/components/input/textbox'>TextBox</NextLink></li>
    </ul>

    <Headline level='3'>Forms</Headline>

    <Headline level='3'>Feedback</Headline>

    <Headline level='3'>Animation</Headline>
    <ul>
      <li><NextLink href='/components/animation/transition'>Transition</NextLink></li>
      <li><NextLink href='/components/animation/transitiongroup'>TransitionGroup</NextLink></li>
    </ul>

    <Headline level='2'>Services</Headline>
    <ul>
      <li><NextLink href='/services/notifications'>notifications</NextLink></li>
    </ul>

  </React.Fragment>
);

export default Page;
