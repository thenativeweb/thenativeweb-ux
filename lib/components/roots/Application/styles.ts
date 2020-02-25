import { ComponentClassNames } from '../../..';

export type ApplicationClassNames = 'Application' | 'ApplicationLayout';

const styles: ComponentClassNames<ApplicationClassNames> = {
  Application: {
    position: 'absolute !important' as any,
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
};

export { styles };
