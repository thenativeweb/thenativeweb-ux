import Theme from '../themes/Theme';
import { useTheme } from 'react-jss';

const useThenativeWebTheme = function (): Theme {
  return useTheme() as Theme;
};

export default useThenativeWebTheme;
