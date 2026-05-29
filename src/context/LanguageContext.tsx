'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';

type Language = 'en' | 'es';
const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGE_STORAGE_KEY = 'froaky-lang';
const LANGUAGE_CHANGE_EVENT = 'froaky-lang-change';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === 'en' || saved === 'es' ? saved : DEFAULT_LANGUAGE;
}

function subscribeToLanguageChange(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeToLanguageChange,
    getStoredLanguage,
    () => DEFAULT_LANGUAGE
  );

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
