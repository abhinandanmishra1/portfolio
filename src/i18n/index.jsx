import React, { createContext, useContext, useMemo, useState } from 'react';
import en from './translations/en';

const TranslationContext = createContext({
  t: (path, fallback) => fallback ?? path,
  locale: 'en',
  setLocale: () => {},
});

const dictionaries = { en };

function getByPath(object, path) {
  if (!object || !path) return undefined;
  const segments = Array.isArray(path) ? path : String(path).split('.');
  return segments.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), object);
}

export const TranslationsProvider = ({ children, defaultLocale = 'en' }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const dictionary = dictionaries[locale] || dictionaries.en;

  const t = useMemo(() => {
    return (key, fallback) => {
      const value = getByPath(dictionary, key);
      return value !== undefined ? value : fallback !== undefined ? fallback : key;
    };
  }, [dictionary]);

  const contextValue = useMemo(() => ({ t, locale, setLocale }), [t, locale]);

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useT = () => useContext(TranslationContext);


