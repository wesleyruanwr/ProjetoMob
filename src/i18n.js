import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import br from './translations/br.json';
import en from './translations/en.json';
import es from './translations/es.json';

const resources = {
  br: {
    translation: br,
  },
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'br',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
