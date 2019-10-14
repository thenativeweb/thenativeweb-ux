import { CheckBox, Icon, Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ControlGroupItemClassNames } from './styles';

interface ControlGroupItemProps {
  className?: string;
  adjust?: 'flex' | 'auto';
  helpLink?: string;
  label: string;
  isVisible?: boolean;
}

const useStyles = createUseStyles<Theme, ControlGroupItemClassNames>(styles);

const ControlGroupItem: FunctionComponent<ControlGroupItemProps> = ({
  adjust = 'flex',
  children,
  helpLink,
  label,
  className
}): ReactElement => {
  const classes = useStyles();

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
          {
            helpLink ?
              (
                <a
                  title='Get more detailed information…'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={ helpLink }
                >
                  <Icon name='help' />
                </a>
              ) :
              null
          }
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
        {
          helpLink ?
            (
              <a
                title='Get more detailed information…'
                rel='noopener noreferrer'
                target='_blank'
                href={ helpLink }
              >
                <Icon name='help' />
              </a>
            ) :
            null
        }
      </div>
      <div className={ classes.Control }>{ child }</div>
    </div>
  );
};

export default ControlGroupItem;
