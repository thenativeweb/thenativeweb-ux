import { oneLine } from 'common-tags';

const minifyCss = function (css: string): string {
  return oneLine(css);
};

export { minifyCss };
