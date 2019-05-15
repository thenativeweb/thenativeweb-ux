import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const KEY = {
  ENTER: 13
};

const styles = theme => ({
  TextBox: {
    padding: '9px 12px',
    'font-size': theme.font.size.default,
    'font-family': theme.font.family.default,
    width: '100%',
    'box-sizing': 'border-box',
    border: `1px solid`,
    'border-color': theme.color.content.border,

    '&:focus': {
      outline: 'none',
      'border-color': theme.color.interaction.focus
    },

    '&::placeholder': {
      color: theme.color.brand.darkGrey,
      'font-family': theme.font.family.default,
      'font-size': 'inherit',
      'font-weight': 400,
      opacity: 0.5
    }
  },

  IsDisabled: {
    color: theme.color.brand.darkGrey,
    background: theme.color.brand.lightGrey
  },

  TypePort: {
    width: '5em'
  },

  TypeTime: {
    width: '7em'
  }
});

class TextBox extends React.Component {
  constructor (props) {
    super(props);

    this.handleFocusTimeout = this.handleFocusTimeout.bind(this);
    this.handleRefChanged = this.handleRefChanged.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount () {
    const { autoFocus, focusDelay } = this.props;

    if (!autoFocus) {
      return;
    }

    if (this.element) {
      this.focusTimeout = setTimeout(this.handleFocusTimeout, focusDelay);
    } else {
      clearTimeout(this.focusTimeout);
    }
  }

  componentWillUnmount () {
    clearTimeout(this.focusTimeout);
  }

  handleFocusTimeout () {
    if (this.element) {
      this.element.focus();
    }
  }

  handleRefChanged (ref) {
    this.element = ref;
  }

  handleKeyDown (event) {
    const { onEnter } = this.props;

    switch (event.keyCode) {
      case KEY.ENTER:
        onEnter(event);
        break;
      default:
        break;
    }
  }

  render () {
    const {
      className,
      classes,
      disabled,
      id,
      name,
      value,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      style,
      type
    } = this.props;

    const componentClasses = classNames(classes.TextBox, {
      [classes.TypePort]: type === 'port',
      [classes.TypeTime]: type === 'time',
      [classes.IsDisabled]: disabled === true,
      [classes.IsRequired]: required === true
    }, className);

    let inputType;

    switch (type) {
      case 'port':
        inputType = 'number';
        break;
      default:
        inputType = type;
    }

    return (
      <input
        id={ id }
        ref={ this.handleRefChanged }
        className={ componentClasses }
        name={ name }
        value={ value }
        onBlur={ onBlur }
        onChange={ onChange }
        onFocus={ onFocus }
        onKeyDown={ this.handleKeyDown }
        placeholder={ placeholder }
        required={ required }
        style={ style }
        type={ inputType }
        disable={ disabled ? 'disabled' : null }
      />
    );
  }
}

TextBox.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'default', 'date', 'port', 'time' ]),
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func
};

TextBox.defaultProps = {
  autoFocus: false,
  disabled: false,
  required: false,
  focusDelay: 0,
  type: 'default',
  onBlur () {
    // Intentionally left blank
  },
  onChange () {
    // Intentionally left blank
  },
  onEnter () {
    // Intentionally left blank
  },
  onFocus () {
    // Intentionally left blank
  }
};

export default withStyles(styles)(TextBox);
