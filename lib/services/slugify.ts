const slugify = function (text: string): string {
  return text.
    toLowerCase().
    replace(/ /gu, '-').
    replace(/[^A-Za-z0-9-]/gu, '');
};

export { slugify };
