import { Language } from '../types/Language';

const getLanguageFromUrl = function (url: string): Language {
  const language = url.split('/').filter((item): boolean => item !== '')[0];

  return language || 'en-us';
};

export { getLanguageFromUrl };
