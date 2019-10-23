import { Styles } from 'jss';
import { Theme } from '../../..';

export type BrandClassNames = 'Brand';

const styles = (theme: Theme): Styles => ({
  Brand: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.color.brand.grayDark
  }
});

export default styles;
