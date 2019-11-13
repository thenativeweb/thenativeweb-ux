import { Styles } from 'jss';

export type LogoThenativeWebClassNames = 'LogoTheNativeWeb' | 'SizeMd' | 'SizeLg' | 'SizeXl';

const styles: Styles<LogoThenativeWebClassNames> = {
  LogoTheNativeWeb: {},

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

export default styles;
