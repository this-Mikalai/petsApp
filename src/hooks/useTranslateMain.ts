import { useState } from 'react';
import { I18n } from 'i18n-js';
import { en } from '../multiLanguage/locale/en';
import { ru } from '../multiLanguage/locale/ru';
import { pl } from '../multiLanguage/locale/pl';
import * as Localization from 'expo-localization';




const i18n = new I18n({ru,en,pl})

export const useTranslate = () => {
  // const [currentLocale, setCurrentLocale] = useState(i18n.locale);
  const [currentLocale, setCurrentLocale] = useState(i18n.locale);
  
  i18n.defaultLocale = 'en';
  i18n.enableFallback = true;

  const chooseLang = (lang) => {
    i18n.locale = lang;
    setCurrentLocale(lang);
  };

  return { t: (text) => i18n.t(text), chooseLang, currentLocale};
};