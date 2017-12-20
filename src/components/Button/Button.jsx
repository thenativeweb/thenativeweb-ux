import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Hint = ({ children }) => (
  <span className={ styles.Hint }>
    { children }
  </span>
);

class Button extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);

    this.state = {
      isPressed: false
    };
  }

  handlePointerDown () {
    this.setState({
      isPressed: true
    });
  }

  handlePointerUp () {
    this.setState({
      isPressed: false
    });
  }

  render () {
    const { autoFocus, adjust, children, id, onClick, isPrimary, size, type } = this.props;
    const { isPressed } = this.state;

    const buttonClassNames = classNames(styles.Button, {
      [styles.AdjustFlex]: adjust === 'flex',
      [styles.AdjustAuto]: adjust === 'auto',
      [styles.SizeDefault]: size === 'default',
      [styles.SizeS]: size === 's',
      [styles.TypePrimary]: isPrimary === true,
      [styles.IsPressed]: isPressed === true
    });

    let buttonType = type || (isPrimary ? 'submit' : 'button');

    return (
      <button
        autoFocus={ autoFocus }
        id={ id }
        type={ buttonType }
        className={ buttonClassNames }
        onClick={ onClick }
        onMouseDown={ this.handlePointerDown }
        onMouseUp={ this.handlePointerUp }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  adjust: PropTypes.oneOf([ 'flex', 'auto' ]),
  autoFocus: PropTypes.bool,
  isPrimary: PropTypes.bool,
  size: PropTypes.oneOf([ 'default', 's' ]),
  type: PropTypes.oneOf([ 'button', 'submit', 'reset' ])
};

Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'default',
  type: undefined
};

Button.Hint = Hint;

export default Button;
