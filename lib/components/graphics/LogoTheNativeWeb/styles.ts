import { Styles } from 'jss';

export type LogoTheNativeWebClassNames = 'LogoTheNativeWeb' | 'SizeSm' | 'SizeMd' | 'SizeLg' | 'SizeXl';

const styles: Styles<LogoTheNativeWebClassNames> = {
  LogoTheNativeWeb: {},

  SizeSm: {
    width: '36px',
    height: '36px'
  },

  SizeMd: {
    width: '56px',
    height: '56px'
  },

  SizeLg: {
    width: '120px',
    height: '120px'
  },

  SizeXl: {
    width: '200px',
    height: '200px'
  }
};

export { styles };
