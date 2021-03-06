import { Icon } from '../../..';
import { isDomNode } from '../../../utils/isDomNode';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { SidebarItemClassNames, styles } from './styles';

interface SidebarItemProps {
  className?: string;
  iconName?: string;
  iconUrl?: string;
  id?: string | undefined;
  isActive?: boolean;
  isNested?: boolean;
  onClick?: () => void;
}

const useStyles = createUseStyles<SidebarItemClassNames>(styles);

const SidebarItem: FunctionComponent<SidebarItemProps> = React.forwardRef(({
  className,
  iconName,
  iconUrl,
  id,
  isActive = false,
  isNested = false,
  children,
  onClick
}, ref): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.SidebarItem,
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
        { iconName ? <Icon name={ iconName } size='md' color='current' /> : null }
      </div>
      <div className={ classes.Items }>
        {
          React.Children.map(
            children,
            (child): ReactNode => {
              if (isDomNode(child)) {
                return child;
              }

              return React.cloneElement(child as ReactElement, { isNested: true });
            }
          )
        }
      </div>
    </div>
  );
});

SidebarItem.displayName = 'SidebarItem';

export { SidebarItem };
