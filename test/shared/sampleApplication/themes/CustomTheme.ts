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
        black: '#000000',
        highlight: '#48bb78',
        gray: '#363d45',
        grayDark: '#2f333b',
        grayLight: '#eeeeee',
        grayModest: '#999999',
        white: '#ffffff'
      },

      interactionColors: {
        focus: '#363d45',
        error: '#ff0000'
      },

      pattern: {
        opacity: 0.05,
        backgroundImage: 'none'
      }
    });
  }
}

export { CustomTheme };
