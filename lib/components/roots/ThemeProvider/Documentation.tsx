import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Application, Brand, Container, Headline, Paragraph, Product, Sidebar, SidebarBrand, SidebarFooter, SidebarItem, ThemeProvider, themes } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>ThemeProvider</Headline>
    <Paragraph>
      Use the <code>ThemeProvider</code> to set the theme for nested components.
      It is required at the top level of your application or website. It can be
      nested so that one part of your component tree can have a different theme
      than other parts of your application.
    </Paragraph>

    <Paragraph>
      By default the <code>ThemeProvider</code> will use the default
      theme called <code>TheNativeWeb</code>. To apply the wolkenkit theme,
      import the <code>themes</code> object and
      pass <code>themes.Wolkenkit</code> as the <code>theme</code> property.
    </Paragraph>

    <ComponentPreview>
      <div style={{ position: 'relative', width: '100%', height: '100%', border: '1px solid black' }}>
        <ThemeProvider theme={ themes.Wolkenkit }>
          <Application useNotifications={ false } useDialogs={ false }>
            <Sidebar>
              <SidebarBrand><Product name='my-app' /></SidebarBrand>
              <SidebarItem iconName='account'>
                <SidebarItem>You are logged in as Sophie</SidebarItem>
                <SidebarItem>Logout</SidebarItem>
              </SidebarItem>
              <SidebarItem iconName='menu' isActive={ true } />
              <SidebarItem iconName='help' />
              <SidebarFooter><Brand type='minimal' color='monochrome' /></SidebarFooter>
            </Sidebar>
            <Container background='light'>My content panel</Container>
          </Application>
        </ThemeProvider>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
