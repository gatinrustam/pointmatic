import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const Languages = ['en','ru'];

const i18nextOptions = {
  lng: "en",
  fallbackLng: 'en',
  // debug: true, // uncomment if need debug
  whiteList: Languages,
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    crossDomain: true,
  }
}

i18n
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nextOptions);

  export default i18n;
