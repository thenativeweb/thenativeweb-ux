import { ComponentClassNames } from '../../..';

export type LabelClassNames = 'Label';

const styles: ComponentClassNames<LabelClassNames> = {
  Label: {
    display: 'block',
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit'
  }
};

export { styles };
