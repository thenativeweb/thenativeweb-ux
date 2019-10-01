import { Classes } from 'jss';

export default interface LogoProps {
  classes: Classes;
  isAnimated?: boolean;
  isVisible?: boolean;
  size?: 'md' | 'lg' | 'xl';
}
