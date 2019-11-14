import { Styles } from 'jss';

export type LabelClassNames = 'Label';

const styles: Styles<LabelClassNames> = {
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
