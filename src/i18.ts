import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru/translation.json';
import tj from './locales/tj/translation.json';
import en from './locales/en/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            tj: { translation: tj },
        },
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: true,
        },
    });

export default i18n;
