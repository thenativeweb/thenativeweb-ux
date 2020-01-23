import { Theme } from '../../../../lib/themes/Theme';

class CustomTheme extends Theme {
  public readonly customComponent = {
    width: '42px'
  };

  public constructor () {
    super({
      name: 'Custom',
      spaceUnit: 8,

      brandColors: {
        highlight: '#48BB78',
        gray: '#363d45',
        grayDark: '#2f333b',
        grayLight: '#eeeeee',
        grayModest: '#999999',
        white: '#ffffff'
      },

      interactionColors: {
        focus: '#363d45'
      },

      pattern: {
        opacity: 0.05,
        backgroundImage: 'none'
      }
    });
  }
}

export { CustomTheme };
