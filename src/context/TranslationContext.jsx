import { createContext, useState, useContext } from "react";
import esTranslations from "../locales/es.json"; // Importación directa
import enTranslations from "../locales/en.json";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // Idioma por defecto: español

  // Objeto con las traducciones importadas
  const translations = {
    es: esTranslations,
    en: enTranslations,
  };

  const translate = (key) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);