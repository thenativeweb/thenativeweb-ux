import { minifyCss } from './minifyCss';
import { Theme } from '..';
import React, { ReactElement } from 'react';

class StaticGlobalStyles {
  private readonly theme: Theme;

  public constructor ({ theme }: { theme: Theme }) {
    this.theme = theme;
  }

  public generateStyleTag (): ReactElement {
    const styles = this.buildStyles();
    const minfiedStyles = minifyCss(styles);

    return (
      <style id='static-global-styles' dangerouslySetInnerHTML={{ __html: minfiedStyles }} />
    );
  }

  private buildStyles (): string {
    return `
      ${this.theme.font.import ? `@import url(${this.theme.font.import});` : ''}

      body, html  {
        margin: 0;
        padding: 0;
        font-family: ${this.theme.font.family.default};
        font-size: ${this.theme.font.size.md};
        line-height: 1.4;
      }

      div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: border-box;
      }
    `;
  }
}

export { StaticGlobalStyles };
