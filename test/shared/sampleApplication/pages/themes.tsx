import { CustomComponent } from '../components/CustomComponent';
import { CustomTheme } from '../themes/CustomTheme';
import {
  Button,
  ThemeProvider,
  Website
} from '../../../../lib';
import React, { ReactElement } from 'react';

const Page = (): ReactElement => (
  <ThemeProvider theme={ new CustomTheme() }>
    <Website>
      <header>Themes</header>
      <CustomComponent id='custom-component' size='lg'>This is a custom component</CustomComponent>
      <Button>This is a custom button</Button>
    </Website>
  </ThemeProvider>
);

export default Page;
