import { MouseEvent } from 'react';

const scrollToAnchor = function (event: MouseEvent<HTMLElement>): void {
  const href = event.currentTarget.getAttribute('href');

  if (!href) {
    return;
  }

  const targetToScrollTo = document.querySelector(href);

  if (!targetToScrollTo) {
    return;
  }

  event.preventDefault();

  targetToScrollTo.scrollIntoView({ behavior: 'smooth' });
};

export { scrollToAnchor };
