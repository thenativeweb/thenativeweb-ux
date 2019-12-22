import classNames from 'classnames';
import { createUseStyles, Icon, Theme, Transition } from '../../../../lib';
import { MobileToggleClassNames, styles } from './styles';
import React, { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';

const useStyles = createUseStyles<Theme, MobileToggleClassNames>(styles);

interface MobileToggleProps {
  isVisible: boolean;
  onClick: () => void;
}

const MobileToggle: FunctionComponent<MobileToggleProps> = ({ isVisible, onClick }): ReactElement => {
  const classes = useStyles();

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
      <div className={ classNames(classes.MobileToggle, { [classes.IsVisible]: isVisible }) }>
        <div onClick={ onClick } className={ classes.Backdrop } />
      </div>
      <div onClick={ onClick } className={ classes.Toggle }>
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

export default MobileToggle;
