import Link from 'next/link';
import {
  Website
} from '../../../build/lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <Website>
    <header>Universally rendered Next.js website</header>
    <Link href='/'><a>Link to application page</a></Link>
  </Website>
);

export default Page;
