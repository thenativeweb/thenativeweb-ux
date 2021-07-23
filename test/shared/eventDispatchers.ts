const click = (element: HTMLElement): void => {
  element.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
};

const mouseover = (element: HTMLElement): void => {
  element.dispatchEvent(new window.Event('mouseover', { bubbles: true }));
};

const submit = (element: HTMLElement): void => {
  element.dispatchEvent(new window.Event('submit', { bubbles: true }));
};

export {
  click,
  mouseover,
  submit
};
