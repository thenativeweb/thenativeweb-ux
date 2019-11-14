import { Styles } from 'jss';
import { Theme } from '../../..';

export type SidebarItemClassNames =
  'SidebarItem' |
  'IsActive' |
  'IsClickable' |
  'IsTopLevel' |
  'IsNested' |
  'Icon' |
  'Label' |
  'Items';

const styles = (theme: Theme): Styles<SidebarItemClassNames> => ({
  SidebarItem: {
    position: 'relative',
    flex: '0 0 auto',
    overflow: 'visible',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',

    '&$IsTopLevel:hover, &$IsClickable:hover, &$IsActive': {
      cursor: 'pointer',
      background: theme.color.brand.highlight,
      color: theme.color.brand.white,

      '& $Items': {
        opacity: 1,
        pointerEvents: 'all',
        transform: 'translate(0, 0)'
      }
    },

    '& $Label': {},

    '& $Icon': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: `${theme.space(3)}px`,
      paddingBottom: `${theme.space(3)}px`,
      color: theme.color.brand.white,

      '& img': {
        width: '48px',
        height: '48px',
        borderRadius: '50%'
      }
    }
  },

  IsActive: {},
  IsClickable: {},
  IsTopLevel: {},

  IsNested: {
    flex: '1 1 100%',
    cursor: 'default',
    whiteSpace: 'nowrap',

    '& $Label': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: `${theme.space(2)}px ${theme.space(3)}px`
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
    left: theme.components.Sidebar.width,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: `${theme.space(50)}px`,
    background: theme.color.brand.grayDark,
    zIndex: theme.zIndices.overlay,
    color: '#848484',
    boxShadow: theme.shadow.overlay,
    opacity: 0,
    pointerEvents: 'none',
    transform: 'translate(-20px, 0)',
    transition: 'opacity 200ms, transform 300ms cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'opacity, transform'
  }
});

export { styles };
