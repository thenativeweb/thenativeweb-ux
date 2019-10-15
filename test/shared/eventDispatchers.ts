const click = (element: HTMLElement): void => {
  element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
};

export {
  click
};
