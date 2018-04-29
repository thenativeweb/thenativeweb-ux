import merge from 'lodash/merge';
import tnw from './tnw';

const theme = merge({}, tnw, {
  color: {
    brand: {
      dark: '#2f333b',
      highlight: '#29abe2',
      darkGrey: '#363d45',
      midGrey: '#eee',
      lightGrey: '#f7f7f7',
      white: '#fff'
    },

    interactionFocus: '#363d45'
  }
});

export default theme;
