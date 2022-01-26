import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "header.menu.solutions": "Solutions",
      "header.menu.tariffs": "Tariffs",
      "header.menu.company": "Company",
      "header.menu.support": "Support",
      "header.menu.cabinet": "Account",
      "welcome.title": "Collect and visualize data. Especially for you.",
      "welcome.desc": "In your personal account there will be a collected database, sorted and filtered as you need it. No automatic decisions.",
      "welcome.button.demo": "Demo",
      "welcome.button.presentation": "Presentation",
    }
  },
  ru: {
    translation: {
      "header.menu.solutions": "Решения",
      "header.menu.tariffs": "Тарифы",
      "header.menu.company": "Компания",
      "header.menu.support": "Поддержка",
      "header.menu.cabinet": "Личный кабинет",
      "welcome.title": "Собираем и визуализируем данные. Специально для вас.",
      "welcome.desc": "В вашем личном кабинете будет собранная база данных, отсортированная и отфильтрованная так, как вам это необходимо. Никаких автоматических решений.",
      "welcome.button.demo": "Демо",
      "welcome.button.presentation": "Презентация",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
