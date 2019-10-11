import { Classes } from 'jss';
import Icon from '../../Icon';
import styles from './styles';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';

interface SidebarItemProps {
  classes: Classes;
  className?: string;
  iconName?: string;
  iconUrl?: string;
  id?: string | undefined;
  isActive?: boolean;
  isNested?: boolean;
  onClick?: () => void;
}

const SidebarItem: FunctionComponent<SidebarItemProps> = React.forwardRef(({
  classes,
  className,
  iconName,
  iconUrl,
  id,
  isActive = false,
  isNested = false,
  children,
  onClick
}, ref): ReactElement => {
  const componentClasses = classNames(
    classes.Item,
    {
      [classes.IsActive]: isActive,
      [classes.IsNested]: isNested,
      [classes.IsTopLevel]: !isNested,
      [classes.IsClickable]: onClick !== undefined
    },
    className
  );

  if (isNested) {
    return (
      <div id={ id } className={ componentClasses } onClick={ onClick }>
        <div className={ classes.Label }>
          { children }
        </div>
      </div>
    );
  }

  return (
    <div ref={ ref as any } id={ id } className={ componentClasses }>
      <div className={ classes.Icon } onClick={ onClick }>
        { iconUrl ? <img src={ iconUrl } /> : null }
        { iconName ? <Icon name={ iconName } size='lg' color='white' /> : null }
      </div>
      <div className={ classes.Items }>
        {
          React.Children.map(children, (child: ReactNode): ReactElement => React.cloneElement(child as ReactElement, { isNested: true }))
        }
      </div>
    </div>
  );
});

export default withStyles(styles)(SidebarItem);
