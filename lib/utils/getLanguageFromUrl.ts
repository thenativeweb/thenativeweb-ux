import { Language } from '../types/Language';

const getLanguageFromUrl = function (url: string): Language {
  const language = url.split('/').find((item): boolean => item !== '');

  return language ?? 'en-us';
};

export { getLanguageFromUrl };
