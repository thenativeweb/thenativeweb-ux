import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
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
        margin: theme.grid.stepSize * 1.6 + 'px ' + theme.grid.stepSize * 2 + 'px'
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
  };
};

var Item = function Item(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      iconName = _ref.iconName,
      iconUrl = _ref.iconUrl,
      id = _ref.id,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === undefined ? false : _ref$isActive,
      _ref$isNested = _ref.isNested,
      isNested = _ref$isNested === undefined ? false : _ref$isNested,
      children = _ref.children,
      onClick = _ref.onClick;

  var componentClasses = classNames(classes.Item, (_classNames = {}, _defineProperty(_classNames, classes.IsActive, isActive), _defineProperty(_classNames, classes.IsNested, isNested), _defineProperty(_classNames, classes.IsTopLevel, !isNested), _defineProperty(_classNames, classes.IsClickable, onClick !== undefined), _classNames), className);

  if (isNested) {
    return React.createElement(
      'div',
      { id: id, className: componentClasses, onClick: onClick },
      React.createElement(
        'div',
        { className: classes.Label },
        children
      )
    );
  }

  return React.createElement(
    'div',
    { id: id, className: componentClasses },
    React.createElement(
      'div',
      { className: classes.Icon, onClick: onClick },
      iconUrl ? React.createElement('img', { src: iconUrl }) : React.createElement(Icon, { name: iconName, size: 'l', color: 'white' })
    ),
    React.createElement(
      'div',
      { className: classes.Items },
      React.Children.map(children, function (child) {
        return React.cloneElement(child, { isNested: true });
      })
    )
  );
};

export default injectSheet(styles)(Item);