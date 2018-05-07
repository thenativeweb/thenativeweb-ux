import Actions from './_Actions.jsx';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import Row from './_Row.jsx';

const styles = theme => ({
  Form: {
    'font-family': theme.font.family.default
  }
});

const Form = ({ children, classes, className, onSubmit }) => {
  const componentClasses = classNames(classes.Form, className);

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

Form.Row = Row;
Form.Actions = Actions;

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  onSubmit () {}
};

export default injectSheet(styles)(Form);
