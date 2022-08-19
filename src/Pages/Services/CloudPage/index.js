import React from 'react';
import Card from './Card';
import { useTranslation } from "react-i18next";
import CallActionContact from "../../../Components/CallActionContact";
import Services from "../IntroductionServices/Services";
import IntroductionServicesMobile from "../IntroductionServicesMobile/index";
import ScrollServices from '../ScrollServices';
import {
  StyledContainer,
  StyledText,
  StyledLineTitle,
  StyledServiceTitle,
  StyledLine,
  StyledServiceDescription,
  StyledCards,
  StyledLastCard,
  StyledCardContent,
  StyledLineMobile,
  MainIntroductionServices,
  MainIntroductionServicesMobile
} from './styles';
import Icon1 from '../../../Assets/cloud-icon-1.svg';
import Icon2 from '../../../Assets/cloud-icon-2.svg';
import Icon3 from '../../../Assets/cloud-icon-3.svg';
import Icon4 from '../../../Assets/cloud-icon-4.svg';
import Icon5 from '../../../Assets/cloud-icon-5.svg';

import Circle from '../../../Assets/circle-mobile.svg';

function CloudPage() {
  const { t } = useTranslation();
  return (
    <>
      <ScrollServices />
      <MainIntroductionServices>
        <Services service=" / Cloud Security" />
      </MainIntroductionServices>
      <MainIntroductionServicesMobile>
        <IntroductionServicesMobile service=" / Cloud Security" />
      </MainIntroductionServicesMobile>
      <StyledContainer>
        <StyledText>
          <StyledLineTitle>
            <StyledServiceTitle>Cloud Security</StyledServiceTitle>
            <img className="circle-mobile" src={Circle} alt="" />
            <StyledLine />
          </StyledLineTitle>
          <StyledServiceDescription>
<<<<<<< HEAD
            {t("text1-cloud")}
=======
            <p>
              {t("text1-cloud")}
            </p>
            <br/>
            <p>
              {t("text1.2-cloud")}
            </p>
>>>>>>> main
          </StyledServiceDescription>
        </StyledText>
        <StyledCards>
          <Card icon={Icon1} title="Data Protection" text={t("text2-cloud")} />
          <Card icon={Icon2} title="Infrastructure Security" text={t("text3-cloud")} />
          <Card icon={Icon3} title="Identity & Access Management (IAM)" text={t("text4-cloud")} />
          <Card icon={Icon4} title="Disaster Recovery " text={t("text5-cloud")} />
          <StyledLastCard>
            <img src={Icon5} alt="icone" />
            <StyledCardContent>
              <h3>
                {t("text8-cloud")}
              </h3>
              <p>
                {t("text9-cloud")}
              </p>
            </StyledCardContent>
          </StyledLastCard>
        </StyledCards>
      </StyledContainer>
      <CallActionContact />
    </>
  );
}

export default CloudPage;
