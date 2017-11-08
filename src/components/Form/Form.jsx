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

const Row = function ({ children }) {
  return (
    <div className={ styles.Row }>{ children }</div>
  );
};

const Actions = function ({ children }) {
  return (
    <div className={ styles.Actions }>{ children }</div>
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

Form.Title = Title;
Form.Row = Row;
Form.Actions = Actions;

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  onSubmit () {}
};

export default Form;
