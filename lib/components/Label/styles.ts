import Theme from '../../themes/Theme';

const styles = (theme: Theme): any => ({
  Label: {
    display: 'block',
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit'
  }
});

export default theme;
