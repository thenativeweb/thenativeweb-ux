const { JSDOM } = require('jsdom');

const dom = new JSDOM('');

global.window = dom.window;
global.document = global.window.document;
global.navigator = {
  userAgent: 'node.js'
};

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src).
    filter(prop => typeof target[prop] === 'undefined').
    reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop)
    }), {});

  Object.defineProperties(target, props);
};

copyProps(document.defaultView, global);
