import React from 'react';
import ReactDom from 'react-dom';
import { setup } from '../src';
import TestApp from './TestApp.jsx';

setup.client();

ReactDom.render(
  <TestApp />,
  document.querySelector('.Shell')
);
