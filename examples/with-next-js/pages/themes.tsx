import CustomComponent from '../components/CustomComponent';
import customTheme from '../themes/customTheme';
import {
  Button,
  ThemeProvider,
  Website
} from '../../../build/lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <ThemeProvider theme={ customTheme }>
    <Website>
      <header>Themes</header>
      <CustomComponent id='custom-component' size='lg'>This is a custom component</CustomComponent>
      <Button>This is a custom button</Button>
    </Website>
  </ThemeProvider>
);

export default Page;
