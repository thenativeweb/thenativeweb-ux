import Icon from '../Icon';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Item: {
    position: 'relative',
    flex: '0 0 auto',
    overflow: 'visible',
    'border-bottom': '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',

    '&$IsTopLevel:hover, &$IsClickable:hover, &$IsActive': {
      cursor: 'pointer',
      background: theme.color.brand.highlight,
      color: theme.color.brand.white,

      '& $Items': {
        opacity: 1,
        'pointer-events': 'all',
        transform: 'translate(0, 0)'
      }
    },

    '& $Label': {},

    '& $Icon': {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'padding-top': theme.grid.stepSize * 2.5,
      'padding-bottom': theme.grid.stepSize * 2.5,
      color: theme.color.brand.white,

      '& img': {
        width: '48px',
        height: '48px',
        'border-radius': '50%'
      }
    }
  },

  IsActive: {},
  IsClickable: {},
  IsTopLevel: {},

  IsNested: {
    flex: '1 1 100%',
    cursor: 'default',
    'white-space': 'nowrap',

    '& $Label': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      margin: `${theme.grid.stepSize * 1.6}px ${theme.grid.stepSize * 2}px`
    },

    '&$IsClickable': {
      color: theme.color.brand.white
    }
  },

  Icon: {},
  Label: {},

  Items: {
    position: 'absolute',
    top: 0,
    left: theme.components.sidebar.width,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'max-width': theme.grid.stepSize * 40,
    background: theme.color.brand.dark,
    'z-index': theme.zIndex.overlay,
    color: '#848484',
    'box-shadow': theme.shadow.overlay,
    opacity: 0,
    'pointer-events': 'none',
    transform: 'translate(-20px, 0)',
    transition: 'opacity 200ms, transform 300ms cubic-bezier(0.19, 1, 0.22, 1)',
    'will-change': 'opacity, transform'
  }
});

const Item = ({ classes, className, iconName, iconUrl, id, isActive = false, isNested = false, children, onClick }) => {
  const componentClasses = classNames(classes.Item, {
    [classes.IsActive]: isActive,
    [classes.IsNested]: isNested,
    [classes.IsTopLevel]: !isNested,
    [classes.IsClickable]: onClick !== undefined
  }, className);

  if (isNested) {
    return (
      <div id={ id } className={ componentClasses } onClick={ onClick }>
        <div className={ classes.Label } >
          { children }
        </div>
      </div>
    );
  }

  return (
    <div id={ id } className={ componentClasses }>
      <div className={ classes.Icon } onClick={ onClick }>
        { iconUrl ? <img src={ iconUrl } /> : <Icon name={ iconName } size='l' color='white' />}
      </div>
      <div className={ classes.Items }>
        {
          React.Children.map(children, child => React.cloneElement(child, { isNested: true }))
        }
      </div>
    </div>
  );
};

export default withStyles(styles)(Item);
