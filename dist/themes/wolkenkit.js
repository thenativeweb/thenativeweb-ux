import merge from 'lodash/merge';
import thenativeweb from './thenativeweb';

var theme = merge({}, thenativeweb, {
  id: 'wolkenkit',
  color: {
    brand: {
      dark: '#2f333b',
      highlight: '#29abe2',
      darkGrey: '#363d45',
      midGrey: '#595c62',
      lightGrey: '#eee',
      white: '#fff'
    },

    interactionFocus: '#363d45'
  }
});

export default theme;