import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const KEY = {
  ENTER: 13
};

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
    switch (event.keyCode) {
      case KEY.ENTER:
        this.props.onEnter(event);
        break;
      default:
        break;
    }
  }

  render () {
    const { className, disabled, id, name, value, onBlur, onChange, onFocus, placeholder, required, type } = this.props;

    const componentClasses = classNames(styles.TextBox, {
      [styles.TypePort]: type === 'port',
      [styles.TypeTime]: type === 'time',
      [styles.IsDisabled]: disabled === true,
      [styles.IsRequired]: required === true
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
  onBlur () {},
  onChange () {},
  onEnter () {},
  onFocus () {}
};

export default TextBox;
