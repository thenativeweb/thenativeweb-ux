import CheckBox from '../../CheckBox';
import { Classes } from 'jss';
import Icon from '../../Icon';
import styles from './styles';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ControlGroupItemProps {
  classes: Classes;
  className?: string;
  adjust: 'flex' | 'auto';
  helpLink: string;
  label: string;
  isVisible: boolean;
}

const ControlGroupItem: FunctionComponent<ControlGroupItemProps> = ({
  className,
  classes,
  adjust = 'flex',
  children,
  helpLink,
  label,
  isVisible = true
}): ReactElement => {
  let type = 'default';
  const child: any = React.Children.only(children);

  if (child && child.type === CheckBox) {
    type = 'checkbox';
  }

  const componentClasses = classNames(
    classes.ControlGroupItem,
    {
      [classes.AdjustFlex]: adjust === 'flex',
      [classes.AdjustAuto]: adjust === 'auto',
      [classes.Hidden]: isVisible === false,
      [classes.Labeled]: label,
      [classes.TypeCheckBox]: type === 'checkbox'
    },
    className
  );

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

export default withStyles(styles)(ControlGroupItem);
