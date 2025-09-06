import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./resources/ar";
import { en } from "./resources/en";

const resources = {
  ar: ar,
  en: en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
