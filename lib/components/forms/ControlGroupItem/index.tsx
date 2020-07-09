import { CheckBox, Icon } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { ControlGroupItemClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ControlGroupItemProps {
  className?: string;
  children: ReactElement;
  adjust?: 'flex' | 'auto';
  helpLink?: string;
  label?: string;
}

const useStyles = createUseStyles<ControlGroupItemClassNames>(styles);

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

  const controlId = child?.props?.id;

  if (type === 'checkbox') {
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
      <div className={ classes.Control }>{ child }</div>
    </div>
  );
};

ControlGroupItem.displayName = 'ControlGroupItem';

export { ControlGroupItem };
