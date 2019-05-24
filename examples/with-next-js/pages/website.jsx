import Link from 'next/link';
import React from 'react';
import {
  Website
} from 'thenativeweb-ux';

const Page = () => (
  <Website>
    <header>Universally rendered Next.js website</header>
    <Link href='/'><a>Link to application page</a></Link>
  </Website>
);

export default Page;
