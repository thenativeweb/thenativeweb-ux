import { SplitView } from '../../components/documentation/SplitView';
import { Button, Code, Headline, Paragraph, ThemeProvider } from '../..';
import { customThemeThatExtendsBaseTheme, CustomThemeThatExtendsWolkenkit } from './themes';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Creating custom themes</Headline>

    <Paragraph>
      <code>thenativeweb-ux</code> comes with two default
      themes, <code>themes.TheNativeWeb</code> and <code>themes.Wolkenkit</code>. Both of
      them extend the abstract class <code>Theme</code>.
    </Paragraph>

    <Paragraph>
      In order to create a custom theme, you have two options: create a new
      theme by extending the abstract <code>Theme</code> or extending one of
      the default themes.
    </Paragraph>

    <Headline level='2'>Creating a theme from scratch</Headline>

    <Paragraph>
      You create a custom theme by extending the abstract
      class <code>Theme</code>. Use this option if you would like to override
      theme properties like colors or font sizes.
    </Paragraph>

    <SplitView>
      <Code language='tsx'>{`
        const customThemeThatExtendsBaseTheme = new CustomThemeThatExtendsBaseTheme({
          name: 'CustomTheme',
          spaceUnit: 18,

          brandColors: {
            highlight: '#48BB78',
            gray: '#222',
            grayDark: '#111',
            grayLight: '#eeeeee',
            grayModest: '#999999',
            white: '#ffffff'
          },

          interactionColors: {
            focus: '#363d45'
          },

          fontSizes: {
            xxs: '12px',
            xs: '16px',
            sm: '18px',
            md: '20px',
            lg: '24px',
            xl: '30px',
            xxl: '48px'
          },

          pattern: {
            opacity: 0.05,
            backgroundImage: 'none'
          }
        });

        <ThemeProvider theme={ customThemeThatExtendsBaseTheme }>
          <Button>Styled with theme that extends base class</Button>
        </ThemeProvider>
      `}
      </Code>
      <ThemeProvider theme={ customThemeThatExtendsBaseTheme }>
        <Button>Styled with theme that extends base class</Button>
      </ThemeProvider>
    </SplitView>

    <Headline level='2'>Extending one of the default themes</Headline>

    <Paragraph>
      If you would like to use a default theme but simply need to override
      some properties, extend <code>themes.TheNativeWeb</code> or <code>themes.Wolkenkit</code>.
    </Paragraph>

    <SplitView>
      <Code language='tsx'>{`
        class CustomThemeThatExtendsWolkenkit extends themes.Wolkenkit {
          public constructor () {
            super();

            this.font.size.md = '18px';
          }
        }

        <ThemeProvider theme={ new CustomThemeThatExtendsWolkenkit() }>
          <Button>Styled with theme that extends Wolkenkit</Button>
        </ThemeProvider>
      `}
      </Code>
      <ThemeProvider theme={ new CustomThemeThatExtendsWolkenkit() }>
        <Button>Styled with theme that extends Wolkenkit</Button>
      </ThemeProvider>
    </SplitView>

    <Headline level='2'>Extending a theme with custom properties</Headline>

    <Paragraph>
      If you want to extend your theme with additional properties, add them
      as readonly properties to your theme class.
    </Paragraph>

    <Code language='tsx'>{`
      class CustomThemeWithCustomProperty extends themes.Wolkenkit {
        public readonly customComponent = {
          width: '300px'
        };
      }
    `}
    </Code>

    <Paragraph>
      You can now use these properties when styling your custom components.
      You just need to make sure that you reference the custom theme instead
      of the default one.
    </Paragraph>

    <Code language='tsx'>{`
      import { CustomTheme as Theme } from '../../themes/CustomTheme';

      const styles = (theme: Theme) => ({
        CustomComponent: {
          width: theme.customComponent.width
        }
      });

      export { styles };
    `}
    </Code>
  </React.Fragment>
);

export { Documentation };
