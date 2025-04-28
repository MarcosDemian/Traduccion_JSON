import { useTranslation } from "./context/TranslationContext";

function App() {
  const { language, setLanguage, translate } = useTranslation();

  const changeLanguage = () => {
    setLanguage(language === "es" ? "en" : "es"); // Alternar entre español e inglés
  };

  return (
    <div>
      <h1>{translate("welcome")}</h1>
      <p>{translate("description")}</p>
      <button onClick={changeLanguage}>
        {language === "es" ? "Switch to English" : "Cambiar a español"}
      </button>
    </div>
  );
}

export default App;