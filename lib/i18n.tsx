'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '@/i18n';
import itDefault from '@/messages/it.json';

type Translations = typeof itDefault;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('it');
  const [translations, setTranslations] = useState<Translations>(itDefault);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = (localStorage.getItem('locale') as Locale) || 'it';
      setLocaleState(savedLocale);
      if (savedLocale !== 'it') {
        loadTranslations(savedLocale);
      }
    }
  }, []);

  const loadTranslations = async (loc: Locale) => {
    try {
      const translations = await import(`@/messages/${loc}.json`);
      setTranslations(translations.default);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to Italian
      const fallback = await import('@/messages/it.json');
      setTranslations(fallback.default);
    }
  };

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', loc);
    }
    loadTranslations(loc);
  };

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    if (typeof value !== 'string') return key;
    
    // Replace parameters
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match;
      });
    }
    
    return value;
  };

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

