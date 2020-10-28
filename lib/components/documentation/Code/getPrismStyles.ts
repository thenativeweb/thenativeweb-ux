import color from 'color';
import { Theme } from '../../..';

const getPrismStyles = function (theme: Theme): Record<string, any> {
  const blue = color(theme.color.division.wolkenkit).lighten(0.6).desaturate(0.1),
        green = color(theme.color.division.technologies).lighten(0.5).desaturate(0.2),
        pink = color(theme.color.division.company).lighten(0.4).desaturate(0.3),
        purple = color(theme.color.division.learning).lighten(1).desaturate(0.4);

  const prismStyles = {
    comment: {
      color: theme.color.brand.grayLight
    },
    prolog: {
      color: theme.color.brand.grayLight
    },
    doctype: {
      color: theme.color.brand.grayLight
    },
    cdata: {
      color: theme.color.brand.grayLight
    },
    punctuation: {
      color: theme.color.brand.grayModest
    },
    '.namespace': {
      opacity: '.7'
    },
    property: {
      color: green
    },
    keyword: {
      color: purple
    },
    tag: {
      color: green
    },
    'class-name': {
      color: pink
    },
    'maybe-class-name': {
      color: pink
    },
    boolean: {
      color: blue
    },
    constant: {
      color: green
    },
    symbol: {
      color: pink
    },
    deleted: {
      color: pink
    },
    number: {
      color: purple
    },
    selector: {
      color: green
    },
    attrname: {
      color: green
    },
    'attr-value': {
      color: blue
    },
    string: {
      color: blue
    },
    char: {
      color: green
    },
    builtin: {
      color: green
    },
    inserted: {
      color: green
    },
    variable: {
      color: blue
    },
    operator: {
      color: theme.color.brand.grayModest
    },
    entity: {
      color: '#FFFFB6',
      cursor: 'help'
    },
    url: {
      color: purple
    },
    '.style.token.string': {
      color: green
    },
    atrule: {
      color: green
    },
    attrvalue: {
      color: blue
    },
    function: {
      color: green
    },
    regex: {
      color: green
    },
    important: {
      color: '#fd971f',
      fontWeight: 'bold'
    },
    bold: {
      fontWeight: 'bold'
    },
    italic: {
      fontStyle: 'italic'
    }
  };

  return prismStyles;
};

export { getPrismStyles };
