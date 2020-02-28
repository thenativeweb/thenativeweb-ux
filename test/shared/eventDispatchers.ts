const click = (element: HTMLElement): void => {
  element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
};

const mouseover = (element: HTMLElement): void => {
  element.dispatchEvent(new Event('mouseover', { bubbles: true }));
};

const submit = (element: HTMLElement): void => {
  element.dispatchEvent(new Event('submit', { bubbles: true }));
};

export {
  click,
  mouseover,
  submit
};
