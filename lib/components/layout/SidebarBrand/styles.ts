import { Styles } from 'jss';
import { Theme } from '../../..';

export type SidebarBrandClassNames = 'SidebarBrand';

const styles = (theme: Theme): Styles<SidebarBrandClassNames> => ({
  SidebarBrand: {
    paddingBottom: `${theme.space(2)}px`,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  }
});

export { styles };
