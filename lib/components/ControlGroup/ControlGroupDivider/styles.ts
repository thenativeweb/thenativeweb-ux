import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  ControlGroupDivider: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: '100%',
    height: '1px',
    background: theme.color.brand.dark,
    opacity: 0.1,
    marginTop: `${theme.space(2.5)}px`,
    marginBottom: `${theme.space(3)}px`,
    border: 'none'
  }
});

export default styles;
