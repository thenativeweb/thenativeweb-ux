import CheckBox from '../CheckBox';
import Icon from '../Icon';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

  '&:last-child': {
    marginRight: 0
  },

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%'
  },

  AdjustAuto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto'
  },

  Labeled: {
    marginRight: '10px'
  },

  Label: {
    marginBottom: '6px',
    color: theme.color.brand.dark,
    fontWeight: 400,
    display: 'flex',

    '& label': {
      flexGrow: 1,
      flexShrink: 1
    },

    '& a': {
      display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.75
    },

    opacity: 1
  },

  Control: {
  },

  TypeCheckBox: {
    '& $Control': {
      paddingRight: '6px'
    }
  }
});

const Item = ({ className, classes, adjust = 'flex', children, helpLink, label, isVisible = true }) => {
  let type = 'default';
  const child = React.Children.only(children);

  if (child.type === CheckBox) {
    type = 'checkbox';
  }

  const componentClasses = classNames(classes.Item, {
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.Hidden]: isVisible === false,
    [classes.Labeled]: label,
    [classes.TypeCheckBox]: type === 'checkbox'
  }, className);

  if (type === 'checkbox') {
    const controlId = child.props.id ? child.props.id : undefined;

    return (
      <div
        className={ componentClasses }
      >
        <div className={ classes.Label }>
          <div className={ classes.Control }>{ child }</div>
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
      <div className={ classes.Control }>{ child }</div>
    </div>
  );
};

export default withStyles(styles)(Item);
