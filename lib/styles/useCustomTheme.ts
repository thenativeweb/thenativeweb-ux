import { Theme } from '../themes/Theme';
import { useTheme } from 'react-jss';

const useCustomTheme = function (): Theme {
  return useTheme();
};

export { useCustomTheme as useTheme };
