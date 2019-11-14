import { createDefaultStyles } from '../../../styles';
import { Styles } from 'jss';
import { Theme } from '../../..';

export type ApplicationClassNames = '@global' | 'Application' | 'ApplicationLayout';

const styles = (theme: Theme): Styles<ApplicationClassNames> => ({
  '@global': {
    ...createDefaultStyles(theme)
  },

  Application: {
    position: 'absolute !important',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },

  ApplicationLayout: {
    height: '100%',
    display: 'grid',

    // We define two columns: the first one for the sidebar and the second one for the content.
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr'
  }
});

export { styles };
