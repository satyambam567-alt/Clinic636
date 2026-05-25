import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, getTranslation } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "hi") return saved;
    
    // Check browser language
    const browserLang = navigator.language.startsWith("hi") ? "hi" : "en";
    return browserLang;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (path: string): string => {
    return getTranslation(language, path);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
