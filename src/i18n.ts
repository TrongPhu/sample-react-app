import i18n from 'i18next'
import viLang from './locales/vi.json';
import enLang from './locales/en.json';
import { initReactI18next } from 'react-i18next'
import localStorageService from './services/localStorageService'

export enum LangPropsEnum {
  'VIE' = 'vi',
  'ENG' = 'en',
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: localStorageService.getLocalStorage('lang') || LangPropsEnum.VIE,
    resources: {
      vi: {
        translation: viLang,
      },
      en: {
        translation: enLang,
      },
    },
    fallbackLng: LangPropsEnum.ENG,
    // keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  })

export default i18n
