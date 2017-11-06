import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Title = ({ children, className }) => {
  const componentClasses = classNames(styles.Title, className);

  return (
    <h2 className={ componentClasses }>
      { children }
    </h2>
  );
};

const Form = ({ children, className, onSubmit }) => {
  const componentClasses = classNames(styles.Form, className);

  if (onSubmit) {
    return (
      <form className={ componentClasses } onSubmit={ onSubmit }>
        { children }
      </form>
    );
  }

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
};

Form.Error = Error;
Form.Title = Title;

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  onSubmit () {}
};

export default Form;
