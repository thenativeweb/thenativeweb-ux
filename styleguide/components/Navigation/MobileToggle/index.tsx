import classNames from 'classnames';
import color from 'color';
import { Styles } from 'react-jss';
import { createUseStyles, Icon, Theme, Transition } from '../../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';

type MobileToggleClassNames =
  'MobileToggle' |
  'IsVisible' |
  'Backdrop' |
  'Toggle' |
  'IconContainer' |
  'NavIcon';

const useStyles = createUseStyles<Theme, MobileToggleClassNames>((theme: Theme): Styles => ({
  MobileToggle: {
    position: 'fixed',
    zIndex: theme.zIndices.content,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    pointerEvents: 'none'
  },

  IsVisible: {},

  Backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    visibility: 'hidden',
    pointerEvents: 'none'
  },

  Toggle: {
    zIndex: theme.zIndices.navigation,
    background: theme.color.brand.grayDark,
    border: '1px solid',
    borderColor: color(theme.color.brand.grayDark).
      lighten(0.8).
      rgb().
      string(),
    boxShadow: '1px 1px 4px rgba(0,0,0, 0.5)',
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: '50%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    willChange: 'opacity'
  },

  IconContainer: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },

  NavIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },

  [theme.breakpoints.down('xs')]: {
    Toggle: {
      display: 'flex',
      pointerEvents: 'auto'
    },

    IsVisible: {
      '& $Backdrop': {
        visibility: 'visible',
        pointerEvents: 'auto'
      }
    }
  }
}));

interface MobileToggleProps {
  isVisible: boolean;
  onClick: () => void;
}

const MobileToggle: FunctionComponent<MobileToggleProps> = ({ isVisible, onClick }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classNames(classes.MobileToggle, { [classes.IsVisible]: isVisible }) }>
      <div onClick={ onClick } className={ classes.Backdrop } />
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
    </div>

  );
};

export default MobileToggle;
