import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const copyProperties = (source: Record<string, any>, target: Record<string, any>): void => {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(source),
    ...Object.getOwnPropertyDescriptors(target)
  });
};

/* eslint-disable @typescript-eslint/no-implied-eval */
(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = { userAgent: 'Node.js' };
(global as any).requestAnimationFrame =
  (callback: () => unknown): number => setTimeout(callback, 0) as unknown as number;
(global as any).cancelAnimationFrame = (id: number): void => clearTimeout(id);
/* eslint-enable @typescript-eslint/no-implied-eval */

copyProperties(window, global);
