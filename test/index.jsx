import React from 'react';
import ReactDom from 'react-dom';
import { Brand, setup } from '../src';

setup.client();

ReactDom.render(
  <div>
    <section>
      <h2>Brand</h2>
      <Brand suffix='profile' />
      <h3>size: s</h3>
      <Brand suffix='profile' size='s' />
    </section>
  </div>
  ,
  document.querySelector('.ui-app')
);
