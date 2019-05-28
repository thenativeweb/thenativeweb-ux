import Actions from './Actions';
import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Form: {
    fontFamily: theme.font.family.default
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
  onSubmit () {
    // Intentionally left blank
  }
};

export default withStyles(styles)(Form);
