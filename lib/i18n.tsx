'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale } from '@/i18n';
import itDefault from '@/messages/it.json';
import enDefault from '@/messages/en.json';

type Translations = typeof itDefault;

const catalogs: Record<Locale, Translations> = {
  it: itDefault,
  en: enDefault as Translations,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({
  children,
  initialLocale = 'it',
}: {
  children: React.ReactNode;
  /** Source of truth from URL (`/[locale]/...`) */
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations>(
    catalogs[initialLocale] ?? itDefault
  );

  useEffect(() => {
    setLocaleState(initialLocale);
    setTranslations(catalogs[initialLocale] ?? itDefault);
    document.documentElement.lang = initialLocale;
    try {
      localStorage.setItem('locale', initialLocale);
    } catch {
      // ignore
    }
  }, [initialLocale]);

  const setLocale = useCallback((loc: Locale) => {
    setLocaleState(loc);
    setTranslations(catalogs[loc] ?? itDefault);
    document.documentElement.lang = loc;
    try {
      localStorage.setItem('locale', loc);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string>): string => {
      const keys = key.split('.');
      let value: unknown = translations;

      for (const k of keys) {
        value = (value as Record<string, unknown>)?.[k];
        if (value === undefined) return key;
      }

      if (typeof value !== 'string') return key;

      if (params) {
        return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
          return params[paramKey] || match;
        });
      }

      return value;
    },
    [translations]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
