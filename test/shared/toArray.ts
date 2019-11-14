const toArray = (arrayLike: NodeListOf<HTMLElement>): any[] => Array.prototype.slice.call(arrayLike);

export { toArray };
