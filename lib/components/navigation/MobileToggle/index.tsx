import { classNames, createUseStyles } from '../../../styles';
import { Icon, Theme, Transition } from '../../..';
import { MobileToggleClassNames, styles } from './styles';
import React, { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';

const useStyles = createUseStyles<Theme, MobileToggleClassNames>(styles);

interface MobileToggleProps {
  position?: 'fixed' | 'absolute';
  isResponsive?: boolean;
  isVisible: boolean;
  onClick: () => void;
}

const MobileToggle: FunctionComponent<MobileToggleProps> = ({
  isResponsive = true,
  isVisible,
  position = 'fixed',
  onClick
}): ReactElement => {
  const classes = useStyles();

  const backdropClasses = classNames(
    classes.MobileToggle, {
      [classes.IsVisible]: isVisible,
      [classes.PositionFixed]: position === 'fixed',
      [classes.PositionAbsolute]: position === 'absolute',
      [classes.IsResponsive]: isResponsive,
      [classes.IsNotResponsive]: !isResponsive
    }
  );
  const toggleClasses = classNames(
    classes.Toggle, {
      [classes.IsVisible]: isVisible,
      [classes.PositionFixed]: position === 'fixed',
      [classes.PositionAbsolute]: position === 'absolute',
      [classes.IsResponsive]: isResponsive,
      [classes.IsNotResponsive]: !isResponsive
    }
  );

  useEffect((): void => {
    const { body } = document;

    if (isVisible) {
      body.classList.add('thenativeweb-mobile-toggle--prevent-body-scroll');
    } else {
      body.classList.remove('thenativeweb-mobile-toggle--prevent-body-scroll');
    }
  }, [ isVisible ]);

  return (
    <Fragment>
      <div className={ backdropClasses }>
        <div onClick={ onClick } className={ classes.Backdrop } />
      </div>
      <div onClick={ onClick } className={ toggleClasses }>
        <div className={ classes.IconContainer }>
          <Transition in={ isVisible } type='Fade'>
            <Icon
              className={ classes.NavIcon }
              name='close'
              size='sm'
              color='white'
            />
          </Transition>
          <Transition in={ !isVisible } type='Fade'>
            <Icon
              className={ classes.NavIcon }
              name='nav'
              size='md'
              color='white'
            />
          </Transition>
        </div>
      </div>
    </Fragment>
  );
};

MobileToggle.displayName = 'MobileToggle';

export { MobileToggle };
