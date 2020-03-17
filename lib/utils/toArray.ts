const toArray = <TElement extends Element>(arrayLike: NodeListOf<TElement>): TElement[] => Array.prototype.slice.call(arrayLike);

export { toArray };
