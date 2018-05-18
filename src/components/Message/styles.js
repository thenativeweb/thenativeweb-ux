const styles = theme => ({
  Message: {
    padding: '10px 15px',
    'margin-bottom': theme.grid.stepSize,
    'font-family': theme.font.family.default
  },

  TypeError: {
    background: theme.color.state.error,
    color: theme.color.brand.white,

    '& $Icon': {
      fill: theme.color.brand.white
    }
  },

  TypeInfo: {
    background: theme.color.brand.lightGrey
  },

  WithIcon: {
    display: 'flex',

    '& $IconContainer': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'flex-grow': 0,
      'flex-basis': 'auto',
      'margin-right': theme.grid.stepSize
    },

    '&. $Content': {
      'flex-grow': 1,
      'flex-basis': '100%'
    }
  },

  IconContainer: {},
  Icon: {},
  Content: {}
});

export default styles;
