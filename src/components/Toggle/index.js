import Button from '../Button';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Toggle: {
    display: 'flex'
  },

  ActiveButton: {
    'margin-right': 0,
    background: theme.color.brand.highlight,

    '&:first-child': {
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0
    },

    '&:last-child': {
      'border-top-left-radius': 0,
      'border-bottom-left-radius': 0
    }
  },

  Button: {
    'margin-right': 0,

    '&:first-child': {
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0
    },

    '&:last-child': {
      'border-top-left-radius': 0,
      'border-bottom-left-radius': 0
    }
  }
});

const renderDefaultToggle = ({ value, isSelected, changeValue, classes }) => (
  <Button
    className={ isSelected ? classes.ActiveButton : classes.Button }
    onClick={ () => changeValue(value) }
    key={ value }
  >{ value }
  </Button>
);

class Toggle extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleChangeValue (newValue) {
    const { onChange } = this.props;

    onChange(newValue);
  }

  render () {
    const { id, classes, className, children, selectedValue, values, style } = this.props;

    const componentClasses = classNames(classes.Toggle, className);

    return (
      <div id={ id } className={ componentClasses } style={ style }>
        {values.map(value => children({
          value,
          isSelected: selectedValue === value,
          changeValue: this.handleChangeValue,
          classes
        }))}
      </div>
    );
  }
}

Toggle.defaultProps = {
  values: [ 'yellow', 'red', 'green' ],
  selectedValue: 'yellow',
  onChange () {
    // Intentionally left blank
  },
  children: renderDefaultToggle
};

export default withStyles(styles)(Toggle);
