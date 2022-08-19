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
  StyledTitleAdvantages,
  StyledCards,
  StyledCardsLeft,
  StyledCardsRight,
  StyledCardColumn1,
  StyledCardColumn2,
  StyledTitleCard,
  StyledTitleCard2,
  StyledProcess,
  StyledProcessColumn1,
  StyledProcessColumn2,
  StyledTitleColumn1,
  StyledTitleColumn2,
  StyledTextColumn2,
  IconColumn1,
  StyledListProcess,
  StyledIconProcess,
  StyledIconText1,
  StyledIconText2,
  StyledIconText3,
  styledTextCard,
  MainIntroductionServices,
  MainIntroductionServicesMobile
} from './styles';

import imgCTO from "../../images/img-cto.svg";

function CTOPage() {
  const { t } = useTranslation();
  return (
    <>
      <ScrollServices />
      <MainIntroductionServices>
        <Services service=" / CTO as a service" />
      </MainIntroductionServices>
      <MainIntroductionServicesMobile>
        <IntroductionServicesMobile service=" / CTO as a service" />
      </MainIntroductionServicesMobile>
      <StyledMainCTO>
        <StyledMaxWidth>
          <StyledLineTitle>
            <StyledServiceTitle>CTO as a service</StyledServiceTitle>
            <StyledLine />
          </StyledLineTitle>
          <StyledServiceDescription>
            {t("text1-cto")}
          </StyledServiceDescription>
          <StyledTitleAdvantages>
            {t("text2-cto")}
          </StyledTitleAdvantages>
        </StyledMaxWidth>
        <StyledCards>
          <StyledCardsLeft>
            <StyledCardColumn1>
              <StyledTitleCard>
                {t("text3-cto")}
              </StyledTitleCard>
              <styledTextCard>
                {t("text4-cto")}
              </styledTextCard>
            </StyledCardColumn1>
            <StyledCardColumn1>
              <StyledTitleCard>
                {t("text5-cto")}
              </StyledTitleCard>
              {t("text6-cto")}
            </StyledCardColumn1>
            <StyledCardColumn1>
              <StyledTitleCard>
                {t("text7-cto")}
              </StyledTitleCard>
              {t("text8-cto")}
            </StyledCardColumn1>
          </StyledCardsLeft>
          <StyledCardsRight>
            <StyledCardColumn2>
              <StyledTitleCard2>
                {t("text9-cto")}
              </StyledTitleCard2>
              <styledTextCard>
                {t("text10-cto")}
              </styledTextCard>
            </StyledCardColumn2>
            <StyledCardColumn2>
              <StyledTitleCard2>
                {t("text11-cto")}
              </StyledTitleCard2>
              <styledTextCard>
                {t("text12-cto")}
              </styledTextCard>
            </StyledCardColumn2>
          </StyledCardsRight>
        </StyledCards>
        <StyledProcess>
          <StyledProcessColumn1>
            <StyledIconText1>{t("text20-cto")}<br /> {t("text20-2-cto")}<br /> {t("text20-3-cto")}</StyledIconText1>
            <StyledIconText2>{t("text21-cto")} <br /> {t("text21-2-cto")} <br />{t("text21-3-cto")}</StyledIconText2>
            <StyledIconText3>{t("text22-cto")} <br /> {t("text22-2-cto")}<br /> {t("text22-3-cto")}</StyledIconText3>
            <StyledTitleColumn1>
              {t("text1-process")}
            </StyledTitleColumn1>
            <IconColumn1 src={imgCTO} />
          </StyledProcessColumn1>
          <StyledProcessColumn2>
            <StyledTitleColumn2>
              {t("text13-cto")}
            </StyledTitleColumn2>
            <StyledTextColumn2>
              <StyledListProcess>
                <StyledIconProcess>{'>'}</StyledIconProcess>
                {t("text14-cto")}
              </StyledListProcess>
              <StyledListProcess>
                <StyledIconProcess>{'>'}</StyledIconProcess>
                {t("text15-cto")}
              </StyledListProcess>
              <StyledListProcess>
                <StyledIconProcess>{'>'}</StyledIconProcess>
                {t("text16-cto")}
              </StyledListProcess>
              <StyledListProcess>
                <StyledIconProcess>{'>'}</StyledIconProcess>
                {t("text17-cto")}
              </StyledListProcess>
              <StyledListProcess>
                <StyledIconProcess>{'>'}</StyledIconProcess>
                {t("text18-cto")}
              </StyledListProcess>
              <StyledListProcess>
                <StyledIconProcess>{'>'}</StyledIconProcess>
                {t("text19-cto")}
              </StyledListProcess>
            </StyledTextColumn2>
          </StyledProcessColumn2>
        </StyledProcess>
      </StyledMainCTO>
      <CallActionContact />
    </>

  )
}

export default CTOPage;