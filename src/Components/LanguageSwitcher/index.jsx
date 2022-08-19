import { useTranslation } from "react-i18next";
import { useState} from 'react';
import br from "./icons/brazil.png";
import us from "./icons/united-states.png";
import "./index.css";

const languageOption = [
  {
    name:"pt",
    value: "pt",
    flag: br
  },

  {
    name:"en",
    value: "en",
    flag: us
  },
];

export const LanguageSwitcher = () => {
const {t, i18n} = useTranslation();

const handleChange = () => {
  if (i18n.language === 'en') {
    i18n.changeLanguage('pt');
  } else {
    i18n.changeLanguage('en');
  }
}

  return(
    <div className="language-switcher" onClick = {() => handleChange()}>
        {languageOption.map(languageOption => 
            <div>
              <span
              id="span-language"
              className={
                  i18n.language === languageOption.value ? "select-language" : "language"
              }
              > 
                {languageOption.name} 
                </span>
            </div>
          )}
      </div>
  )
}