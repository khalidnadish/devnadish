import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs:['en','ar'], 
    // debug: true,
    fallbackLng: 'en',
    detection:{
      order:['path','cookie','htmlTag','localStoage','subdomain'],
      caches:['cookie']
    },
   backend:{
    loadPath:'/assets/locales/{{lng}}/translation.json'},
    
  });

export default i18n;


// detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options