import { createDefaultStyles } from '../../styles';
import { Styles } from 'jss';
import { Theme } from '../..';

export type WebsiteClassNames = '@global' | 'Website';

const styles = (theme: Theme): Styles<WebsiteClassNames> => ({
  '@global': {
    ...createDefaultStyles(theme)
  },

  Website: {}
});

export default styles;
