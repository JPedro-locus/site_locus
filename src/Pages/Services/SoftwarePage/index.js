import { useTranslation } from "react-i18next";
import Services from "../IntroductionServices/Services";
import CallActionContact from "../../../Components/CallActionContact";
import IntroductionServicesMobile from "../IntroductionServicesMobile/index";
import ScrollServices from '../ScrollServices';
import {
  StyledMainCTO,
  StyledMaxWidth,
  StyledLineTitle,
  StyledServiceTitle,
  StyledLine,
  StyledServiceDescription,
  StyledBox,
  StyledContainerLanguage,
  LanguageColumn1,
  LanguageColumn2,
  Language,
  StyledScrum,
<<<<<<< HEAD
=======
  StyledSubTitle,
>>>>>>> main
  StyledValue,
  TitleValue,
  NumberValue,
  BoxColumn,
  BoxItem,
  StyledTextBox,
  MainIntroductionServices,
  MainIntroductionServicesMobile
} from './styles';

import Icon1 from "../../../Assets/icon-mobile.svg";
import Icon2 from "../../../Assets/icon-web.svg";
import Icon3 from "../../../Assets/icon-mobile.svg";
import Icon4 from "../../../Assets/icon-poc.svg";
import Icon5 from "../../../Assets/icon-api.svg";
import Icon6 from "../../../Assets/icon-games.svg";
import Icon7 from "../../../Assets/icon-engenering.svg";

import CLanguage from "../../../Assets/cIcon.svg";
import reactLanguage from "../../../Assets/react.svg";
import angularLanguage from "../../../Assets/angular.svg";
import nodeLanguage from "../../../Assets/node.svg";
import javaLanguage from "../../../Assets/java.svg";
import pythonLanguage from "../../../Assets/python.svg";

function SoftwarePage() {
  const { t } = useTranslation();
  return (
    <>
       <ScrollServices />
      <MainIntroductionServices>
        <Services service=" / Custom Software" />
      </MainIntroductionServices>
      <MainIntroductionServicesMobile>
        <IntroductionServicesMobile service=" / Custom Software" />
      </MainIntroductionServicesMobile>
      <StyledMainCTO>
        <StyledMaxWidth>
          <StyledLineTitle>
            <StyledServiceTitle>Custom Software <br /> Development</StyledServiceTitle>
            <StyledLine />
          </StyledLineTitle>
          <StyledServiceDescription>
            {t("text1-software")}
          </StyledServiceDescription>
        </StyledMaxWidth>
        <StyledBox>
          <BoxColumn>
            <BoxItem>
              <p>{t("text2-software")} <br /> {t("text2-2-software")}</p>
              <img src={Icon1} />
            </BoxItem>
            <BoxItem>
              <p>{t("text3-software")}<br />{t("text3-2-software")}</p>
              <img src={Icon2} />
            </BoxItem>
            <BoxItem>
              <p>{t("text4-software")}<br />{t("text4-2-software")}</p>
              <img src={Icon3} />
            </BoxItem>
            <BoxItem className="icon-dev">
              <p>{t("text5-software")}<br />{t("text5-2-software")}</p>
              <img src={Icon4} />
            </BoxItem>
          </BoxColumn>
          <BoxColumn>
            <BoxItem>
              <p>{t("text6-software")}<br />{t("text6-2-software")}</p>
              <img src={Icon5} />
            </BoxItem>
            <BoxItem>
              <p>{t("text7-software")}</p>
              <img src={Icon6} />
            </BoxItem>
            <BoxItem>
              <p>{t("text8-software")}</p>
              <img src={Icon7} />
            </BoxItem>
          </BoxColumn>
          <StyledTextBox>
            {t("text10-software")}
          </StyledTextBox>
        </StyledBox>
        <StyledContainerLanguage>
          <LanguageColumn1>
            <Language src={CLanguage} />
            <Language src={reactLanguage} />
            <Language src={angularLanguage} />
          </LanguageColumn1>
          <LanguageColumn2>
            <Language src={nodeLanguage} />
            <Language src={javaLanguage} />
            <Language src={pythonLanguage} />
          </LanguageColumn2>
        </StyledContainerLanguage>
        <StyledScrum>
          {t("text9-software")}
        </StyledScrum>
<<<<<<< HEAD
=======
        
        <StyledSubTitle>
          {t("text-software-bold1")}
          <br />
          {t("text-software-bold2")}
        </StyledSubTitle>
        
>>>>>>> main
        <StyledValue>
          <NumberValue>1</NumberValue>
          <TitleValue>
            {t("text11-software")}
          </TitleValue>
          <p> {t("text12-software")}</p>
        </StyledValue>
        <StyledValue>
          <NumberValue>2</NumberValue>
          <TitleValue>
            {t("text13-software")}
          </TitleValue>
          <p>{t("text14-software")}</p>
        </StyledValue>
        <StyledValue>
          <NumberValue>3</NumberValue>
          <TitleValue>
            {t("text15-software")}
          </TitleValue>
          <p>{t("text16-software")}</p>
        </StyledValue>
      </StyledMainCTO>
      <CallActionContact />
    </>
  )
}

export default SoftwarePage;