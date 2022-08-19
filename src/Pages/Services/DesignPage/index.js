import React, { useState } from "react";
import ModalLaunch from "../Modals/modalLaunch/modal";
import ModalUx from "../Modals/ModalUx/modal";
import ModalUi from "../Modals/ModalUI/modal";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Services from "../IntroductionServices/Services";
import CallActionContact from "../../../Components/CallActionContact";
import IntroductionServicesMobile from "../IntroductionServicesMobile/index";
import {
  StyledServiceContent,
  StyledServiceTitle,
  StyledServiceDescription,
  StyledTopic,
  StyledRowContent,
  StyledBlockContent,
  StyledFlexBox,
  StyledTopicImg,
  StyledSteps,
  StyledStepRow,
  StyledStepImgTitle,
  StyledLineTitle,
  StyledLine,
  StyledMaxWidth,
  StyledServiceContentMobile,
  StyledBack,
  MainIntroductionServices,
  MainIntroductionServicesMobile
} from './styles';
import UXANALYSIS from '../../../Assets/UX-ANALYSIS.svg';
import Step1 from '../../../Assets/service-pesquisa.svg';
import Step2 from '../../../Assets/service-visao.svg';
import Step3 from '../../../Assets/service-validacao.svg';

import UIMODELATION from '../../../Assets/UI-MODELATION.svg';
import Step4 from '../../../Assets/service-analise.svg';
import Step5 from '../../../Assets/service-prototipo.svg';
import Step6 from '../../../Assets/service-testagem.svg';

import UXLAUNCH from '../../../Assets/UX-launch.svg';
import Step7 from '../../../Assets/service-evolucao.svg';
import Step8 from '../../../Assets/service-acompanhamento.svg';
import ScrollServices from '../ScrollServices';

function DesignPage() {
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <ScrollServices />
      <MainIntroductionServices>
        <Services service=" / Design Inception" />
      </MainIntroductionServices>
      <MainIntroductionServicesMobile>
        <IntroductionServicesMobile service=" / Design Inception" />
      </MainIntroductionServicesMobile>
      <StyledServiceContent>
        <StyledMaxWidth>
          <StyledLineTitle>
            <StyledServiceTitle>Design Inception</StyledServiceTitle>
            <StyledLine />
          </StyledLineTitle>
          <StyledServiceDescription>
<<<<<<< HEAD
            {t("text1-designI")}
=======
            <p>{t("text1-designI")}</p>
            <br/>
            <p>{t("text1.2-designI")}</p>
>>>>>>> main
          </StyledServiceDescription>
        </StyledMaxWidth>
        <StyledRowContent justify="flex-start">
          <StyledTopic infinite>
            <StyledBlockContent>
              <StyledFlexBox>
                <h2>
                  UX Analysis
                </h2>
                <StyledTopicImg className="adjust-image" src={UXANALYSIS} />
              </StyledFlexBox>
              <p>
                {t("text2-designI")}
              </p>
            </StyledBlockContent>
          </StyledTopic>
          <StyledSteps>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2> {t("text3-designI")}</h2>
                <img src={Step1} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text4-designI")}
              </p>
            </StyledStepRow>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2> {t("text5-designI")}</h2>
                <img src={Step2} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text6-designI")}
              </p>
            </StyledStepRow>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2>{t("text7-designI")}</h2>
                <img src={Step3} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text8-designI")}
              </p>
            </StyledStepRow>
          </StyledSteps>
        </StyledRowContent>

        <StyledRowContent justify="flex-end">
          <StyledTopic>
            <StyledBlockContent>
              <StyledFlexBox>
                <h2>
                  UI Modelation
                </h2>
                <StyledTopicImg src={UIMODELATION} />
              </StyledFlexBox>
              <p>
                {t("text9-designI")}
              </p>
            </StyledBlockContent>
          </StyledTopic>
          <StyledSteps infinite>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2>{t("text10-designI")}</h2>
                <img src={Step4} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text11-designI")}
              </p>
            </StyledStepRow>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2>{t("text12-designI")}</h2>
                <img src={Step5} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text13-designI")}
              </p>
            </StyledStepRow>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2>{t("text14-designI")}</h2>
                <img src={Step6} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text15-designI")}
              </p>
            </StyledStepRow>
          </StyledSteps>
        </StyledRowContent>

        <StyledRowContent justify="flex-start">
          <StyledTopic infinite height="312px">
            <StyledBlockContent>
              <StyledFlexBox>
                <h2>
                  Design Launch
                </h2>
                <StyledTopicImg src={UXLAUNCH} />
              </StyledFlexBox>
              <p>
                {t("text16-designI")}
              </p>
            </StyledBlockContent>
          </StyledTopic>
          <StyledSteps>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2>{t("text17-designI")}</h2>
                <img src={Step7} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text18-designI")}
              </p>
            </StyledStepRow>
            <StyledStepRow>
              <StyledStepImgTitle>
                <h2>{t("text19-designI")}</h2>
                <img src={Step8} alt="icone ilustrativo" />
              </StyledStepImgTitle>
              <p>
                {t("text20-designI")}
              </p>
            </StyledStepRow>
          </StyledSteps>
        </StyledRowContent>
      </StyledServiceContent>
      <StyledServiceContentMobile>
        <StyledServiceTitle>Design Inception</StyledServiceTitle>
        <StyledLine />
        <StyledServiceDescription>
          {t("text1-designI")}
        </StyledServiceDescription>
        <StyledTopic infinite height="312px">
          <StyledBlockContent>
            <StyledFlexBox>
              <h2>
                UX Analysis
              </h2>
              <StyledTopicImg src={UXANALYSIS} />
            </StyledFlexBox>
            <p>
              {t("text2-designI")}
            </p>
            <button className="button-modal" onClick={() => setShow1(true)}>Ver mais {'>'}</button>
            <ModalUx title=" UX Analysis" onClose={() => setShow1(false)} show1={show1}>
              <p>
                {t("text2-designI")}
              </p>
            </ModalUx>
          </StyledBlockContent>
        </StyledTopic>
        <StyledRowContent justify="flex-end">
          <StyledTopic>
            <StyledBlockContent>
              <StyledFlexBox>
                <h2>
                  UI Modelation
                </h2>
                <StyledTopicImg src={UIMODELATION} />
              </StyledFlexBox>
              <p>
                {t("text9-designI")}
              </p>
              <button className="button-modal" onClick={() => setShow2(true)}>Ver mais {'>'}</button>
              <ModalUi title="UI Modelation" onClose={() => setShow2(false)} show2={show2}>
                <p>
                  {t("text9-designI")}
                </p>
              </ModalUi>
            </StyledBlockContent>
          </StyledTopic>
        </StyledRowContent>
        <StyledTopic infinite height="312px">
          <StyledBlockContent>
            <StyledFlexBox>
              <h2>
                Design Launch
              </h2>
              <StyledTopicImg src={UXLAUNCH} />
            </StyledFlexBox>
            <p>
              {t("text16-designI")}
            </p>
            <button className="button-modal" onClick={() => setShow(true)}>Ver mais {'>'}</button>
            <ModalLaunch title="Design Launch" onClose={() => setShow(false)} show={show}>
              <p>
                {t("text16-designI")}
              </p>
            </ModalLaunch>
          </StyledBlockContent>
        </StyledTopic>
      </StyledServiceContentMobile>
      <CallActionContact />
    </>
  );
}

export default DesignPage;
