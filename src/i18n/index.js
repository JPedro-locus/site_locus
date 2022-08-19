import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from "../i18n/translations/ptBR.json";
import ENUS from "../i18n/translations/enUS.json";


i18n
    .use(initReactI18next)
    .init({
        fallbackLng:"en",
        interpolation: {
          escapeValue: false,
        },
        resources: {
            en : ENUS,
            pt : PTBR,
        }
    });


export default i18n;