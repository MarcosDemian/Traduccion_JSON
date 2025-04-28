# 🌍 Sistema de Traducciones en React + Vite con JSON

Implementación de un sistema de traducción sencillo para cambiar entre  **español**  e  **inglés**  usando React, Vite y archivos JSON.

## 🚀 Características

-   ✅ Cambio de idioma  **sin recargar la página**.
    
-   ✅ Estructura escalable (fácil añadir más idiomas).
    
-   ✅ Sin dependencias externas (solo React + Vite).
    

----------

## 📂 Estructura de Archivos

src/
├── locales/
│   ├── es.json       # Textos en español
│   └── en.json       # Textos en inglés
├── context/
│   └── TranslationContext.jsx  # Lógica de traducción
└── App.jsx           # Componente principal

----------

## 🔧 Configuración

### 1. Crear archivos JSON de traducción

**`locales/es.json`**
{
  "welcome": "Bienvenido",
  "description": "Esta es una prueba de traducción."
}

**`locales/en.json`**
{
  "welcome": "Welcome",
  "description": "This is a translation test."
}

### 2. Configurar el contexto (`TranslationContext.jsx`)

import { createContext, useState, useContext } from "react";
import esTranslations from "../locales/es.json";
import enTranslations from "../locales/en.json";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // Idioma predeterminado

  const translations = {
    es: esTranslations,
    en: enTranslations,
  };

  const translate = (key) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>  {children}  </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

### 3. Usar en componentes (`App.jsx`)
import { useTranslation } from "./context/TranslationContext";

function App() {
  const { language, setLanguage, translate } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
....  );
}

export default App;

----------

## ▶️ Cómo Probar

1.  Clona el repositorio o crea un nuevo proyecto con Vite:
    npm create vite@latest my-translations-app --template react
    
2.  Agrega los archivos JSON y el contexto como se muestra arriba.
    
3.  Ejecuta el proyecto:
    npm run dev
    
4.  Haz clic en el botón para cambiar entre idiomas.