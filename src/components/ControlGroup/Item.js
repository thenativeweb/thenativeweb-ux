import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  Item: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-end'
  },

  '&:last-child': {
    'margin-right': 0
  },

  AdjustFlex: {
    'flex-grow': 1,
    'flex-shrink': 1,
    'flex-basis': '100%'
  },

  AdjustAuto: {
    'flex-grow': 0,
    'flex-shrink': 0,
    'flex-basis': 'auto'
  },

  Labeled: {
    'margin-right': '10px'
  },

  Label: {
    'margin-bottom': '6px',
    color: theme.color.brand.dark,
    'font-weight': 400,
    display: 'flex',

    '& label': {
      'flex-grow': 1,
      'flex-shrink': 1
    },

    '& a': {
      display: 'flex',
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
      'align-items': 'center',
      'justify-content': 'center',
      opacity: 0.75
    },

    opacity: 1
  }
});

const Item = ({ className, classes, adjust = 'flex', children, helpLink, label, isVisible = true, type = 'text' }) => {
  const componentClasses = classNames(classes.Item, {
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.Hidden]: isVisible === false,
    [classes.Labeled]: label,
    [classes.TypeCheckbox]: type === 'checkbox'
  }, className);

  if (type === 'checkbox') {
    const controlId = children || children.props.id ? children.props.id : undefined;

    return (
      <div
        className={ componentClasses }
      >
        <div className={ classes.Label }>
          <div className={ classes.Control }>{ children }</div>
          { label ? <label htmlFor={ controlId }>{ label }</label> : null }
          { helpLink ? <a className={ classes.Help } title='Get more detailed information…' rel='noopener noreferrer' target='_blank' href={ helpLink }><Icon name='help' className={ styles.IconHelp } /></a> : null }
        </div>
      </div>
    );
  }

  return (
    <div
      className={ componentClasses }
    >
      <div className={ classes.Label }>
        { label ? <label>{ label }</label> : null }
        { helpLink ? <a className={ classes.Help } rel='noopener noreferrer' target='_blank' href={ helpLink }><Icon name='help' className={ styles.IconHelp } /></a> : null }
      </div>
      <div className={ classes.Control }>{ children }</div>
    </div>
  );
};

export default injectSheet(styles)(Item);
