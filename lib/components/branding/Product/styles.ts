import { ComponentClassNames, Theme } from '../../..';

export type ProducClassNames =
  'Product' |
  'IsCollapsed' |
  'Name' |
  'CompositeName' |
  'SizeSm' |
  'SizeMd' |
  'SizeLg' |
  'SizeXl' |
  'TypeLogoOnly' |
  'TypeTextOnly';

const styles = (theme: Theme): ComponentClassNames<ProducClassNames> => ({
  Product: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    fontWeight: 500
  },

  IsCollapsed: {
    '& *': {
      animation: 'none'
    }
  },

  Name: {
    textAlign: 'center',
    marginTop: '3px',
    color: theme.color.brand.white
  },

  CompositeName: {
    textAlign: 'center',
    marginTop: '3px',
    color: theme.color.brand.highlight,

    '& span': {
      color: theme.color.brand.white
    }
  },

  SizeSm: {
    flexDirection: 'row',

    '& $Name, & $CompositeName': {
      marginLeft: theme.space(1),
      fontSize: theme.font.size.sm
    }
  },

  SizeMd: {
    '& $Name, & $CompositeName': {
      fontSize: theme.font.size.sm
    }
  },

  SizeLg: {
    '& $Name, & $CompositeName': {
      fontSize: theme.font.size.lg
    }
  },

  SizeXl: {
    '& $Name, & $CompositeName': {
      fontSize: theme.font.size.xl
    }
  },

  TypeLogoOnly: {},

  TypeTextOnly: {
    '& $Name, & $CompositeName': {
      marginTop: 0
    }
  },

  [theme.breakpoints.down('sm')]: {
    Name: {},
    CompositeName: {},

    SizeLg: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.md
      }
    },

    SizeXl: {
      '& $Name, & $CompositeName': {
        fontSize: theme.font.size.lg
      }
    }
  }
});

export { styles };
