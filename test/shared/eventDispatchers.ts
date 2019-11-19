const click = (element: HTMLElement): void => {
  element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
};

const submit = (element: HTMLElement): void => {
  element.dispatchEvent(new Event('submit', { bubbles: true }));
};

export {
  click,
  submit
};
