import CustomComponent from '../components/CustomComponent.jsx';
import React from 'react';
import {
  ThemeProvider,
  themes,
  Website
} from '../../../lib';

const customTheme = themes.extend('thenativeweb', {
  components: {
    CustomComponent: {
      width: '42px'
    }
  }
});

const Page = () => (
  <ThemeProvider theme={ customTheme }>
    <Website>
      <header>Themes</header>
      <CustomComponent id='custom-component' size='lg'>This is a custom component</CustomComponent>
    </Website>
  </ThemeProvider>
);

export default Page;
