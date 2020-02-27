import { ComponentClassNames, Theme } from '../../..';

export type ModalRowClassNames =
  'ModalRow';

const styles = (theme: Theme): ComponentClassNames<ModalRowClassNames> => ({
  ModalRow: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

export { styles };
