import { Styles } from 'jss';
import { Theme } from '../../..';

export type ControlGroupDividerClassNames = 'ControlGroupDivider';

const styles = (theme: Theme): Styles<ControlGroupDividerClassNames> => ({
  ControlGroupDivider: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: '100%',
    height: '1px',
    background: theme.color.brand.grayDark,
    opacity: 0.1,
    marginTop: `${theme.space(2.5)}px`,
    marginBottom: `${theme.space(3)}px`,
    border: 'none'
  }
});

export { styles };
