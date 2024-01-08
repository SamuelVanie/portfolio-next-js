import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//import translationEN from './locales/en.json'; // English translations
import translationFR from './locales/fr.json'; // French translations

const resources = {
 /* en: {
    translation: translationEN,
  }*/
  fr: {
    translation: translationFR,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;