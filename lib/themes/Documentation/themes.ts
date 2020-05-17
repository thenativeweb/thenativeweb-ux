import { Theme, themes } from '../..';

class CustomThemeThatExtendsBaseTheme extends Theme {}

const customThemeThatExtendsBaseTheme = new CustomThemeThatExtendsBaseTheme({
  name: 'CustomTheme',
  spaceUnit: 18,

  brandColors: {
    black: '#000000',
    highlight: '#48BB78',
    gray: '#222',
    grayDark: '#111',
    grayLight: '#eeeeee',
    grayModest: '#999999',
    white: '#ffffff'
  },

  interactionColors: {
    focus: '#363d45',
    error: '#ff0000'
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

class CustomThemeThatExtendsWolkenkit extends themes.Wolkenkit {
  public constructor () {
    super();

    this.font.size.md = '18px';
  }
}

class CustomThemeWithCustomProperty extends themes.Wolkenkit {
  public readonly customComponent = {
    width: '300px'
  };
}

export {
  customThemeThatExtendsBaseTheme,
  CustomThemeThatExtendsWolkenkit,
  CustomThemeWithCustomProperty
};
