import react from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Services from "../IntroductionServices/Services";

import FunctionalTest from "../Modals/FunctionalTest/modal";
import NonFunctionalTest from "../Modals/NonFunctionalTest/modal";
import StructuralTest from "../Modals/StructuralTest/modal";
import CallActionContact from "../../../Components/CallActionContact";
import IntroductionServicesMobile from "../IntroductionServicesMobile/index";
import ScrollServices from '../ScrollServices';
import {
  StyledServiceContent,
  StyledServiceTitle,
  StyledRowContent,
  StyledRightBlock,
  StyledLeftBlock,
  StyledSmallBlock,
  StyledTitleContainer,
  StyledFullBorder,
  StyledFullWithoutBorder,
  StyledHalfBorder,
  StyledList,
  StyledHalfWithoutBorder,
  ButtomModalMobile,
  MainIntroductionServices,
  MainIntroductionServicesMobile
} from './styles';

function QAPage() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <ScrollServices />
      <MainIntroductionServices>
        <Services service=" / QA Test" />
      </MainIntroductionServices>
      <MainIntroductionServicesMobile>
        <IntroductionServicesMobile service=" / QA Test" />
      </MainIntroductionServicesMobile>
      <StyledServiceContent>
        <StyledServiceTitle>
<<<<<<< HEAD
          <h1>{t("text1-test")}</h1>
=======
          <h1>{t("text0-test")}</h1>
          <h1 className='adjustDistance'>{t("text1-test")}</h1>
>>>>>>> main
        </StyledServiceTitle>
        <StyledRowContent>
          <StyledLeftBlock>
            <StyledTitleContainer>
              <h2>
                {t("text2-test")} <br /> {t("text2-2-test")}
              </h2>
            </StyledTitleContainer>
            <StyledSmallBlock isGreen>
              <StyledFullBorder className="isFirst" isGreen>
                <h3>{t("text3-test")}</h3>
                <p>
                  {t("text4-test")}
                </p>
              </StyledFullBorder>
              <StyledFullWithoutBorder>
                <h3>{t("text5-test")}</h3>
                <p>
                  {t("text6-test")}
                </p>
                <ButtomModalMobile>
                  <button className="button-modal-functional" onClick={() => setShow(true)}>{t("seeBenefits")} {'>'}</button>
                  <FunctionalTest title="Teste Funcional" onClose={() => setShow(false)} show={show}>
                    <StyledHalfBorder isGreen>
                      <p className="modal-functional-title"> {t("benefits")}</p>
                      <p className="modal-functional-subtitle"> {t("text45-test")}</p>
                      <StyledList>
                        <li> {t("text8-test")};</li>
                        <li> {t("text9-test")};</li>
                        <li> {t("text10-test")};</li>
                        <li> {t("text11-test")};</li>
                        <li> {t("text12-test")}.</li>
                      </StyledList>
                    </StyledHalfBorder>
                    <StyledList>
                      <p className="modal-functional-subtitle">{t("text5-test")}</p>
                      <li>{t("text13-test")};</li>
                      <li>{t("text14-test")};</li>
                      <li>{t("text15-test")};</li>
                      <li>{t("text16-test")}.</li>
                      <li>{t("text12-test")}.</li>
                    </StyledList>
                  </FunctionalTest>
                </ButtomModalMobile>
              </StyledFullWithoutBorder>
            </StyledSmallBlock>
          </StyledLeftBlock>
          <StyledRightBlock isGreen>
            <StyledHalfBorder isGreen>
              <h3>{t("benefits")}</h3>
              <StyledList>
                <li> {t("text8-test")};</li>
                <li>{t("text9-test")};</li>
                <li>{t("text10-test")};</li>
                <li>{t("text11-test")};</li>
                <li>{t("text12-test")}.</li>
              </StyledList>
            </StyledHalfBorder>
            <StyledHalfWithoutBorder tallPadding>
              <StyledList>
                <li>{t("text13-test")};</li>
                <li>{t("text14-test")};</li>
                <li>{t("text15-test")};</li>
                <li>{t("text16-test")}.</li>
                <li>{t("text12-test")}.</li>
              </StyledList>
            </StyledHalfWithoutBorder>
          </StyledRightBlock>
        </StyledRowContent>
        <StyledRowContent>
          <StyledLeftBlock>
            <StyledTitleContainer>
              <h2>
                {t("text17-test")} <br /> {t("text17-2-test")}
              </h2>
            </StyledTitleContainer>
            <StyledSmallBlock >
              <StyledFullBorder className="isFirst">
                <h3>{t("text18-test")}</h3>
                <p>
                  {t("text19-test")}
                </p>
              </StyledFullBorder>
              <StyledFullBorder>
                <h3>{t("text20-test")}</h3>
                <p>
                  {t("text21-test")}
                </p>
              </StyledFullBorder>
              <StyledFullWithoutBorder>
                <h3> {t("text22-test")}</h3>
                <p>
                  {t("text23-test")}
                </p>
                <ButtomModalMobile>
                  <button className="button-modal-non-functional" onClick={() => setShow1(true)}>{t("seeBenefits")} {'>'}</button>
                  <NonFunctionalTest title="Teste Não Funcional" onClose={() => setShow1(false)} show1={show1}>
                    <StyledHalfBorder>
                      <p className="modal-non-functional-title">{t("benefits")}</p>
                      <p className="modal-non-functional-subtitle">{t("text18-test")}</p>
                      <StyledList>
                        <li> {t("text24-test")};</li>
                        <li> {t("text25-test")};</li>
                        <li> {t("text26-test")};</li>
                      </StyledList>
                    </StyledHalfBorder>
                    <StyledHalfBorder>
                      <StyledList>
                        <p className="modal-non-functional-subtitle">{t("text20-test")}</p>
                        <li> {t("text27-test")};</li>
                        <li> {t("text28-test")};</li>
                        <li> {t("text29-test")};</li>
                      </StyledList>
                    </StyledHalfBorder>
                    <StyledHalfBorder>
                      <p className="modal-non-functional-subtitle">{t("text22-test")}</p>
                      <StyledList>
                        <li> {t("text30-test")};</li>
                        <li> {t("text31-test")};</li>
                        <li> {t("text51-test")};</li>
                        <li> {t("text52-test")};</li>
                      </StyledList>
                    </StyledHalfBorder>
                  </NonFunctionalTest>
                </ButtomModalMobile>
              </StyledFullWithoutBorder>
            </StyledSmallBlock>
          </StyledLeftBlock>
          <StyledRightBlock>
            <StyledHalfBorder>
              <h3>{t("benefits")}</h3>
              <StyledList>
                <li> {t("text24-test")};</li>
                <li> {t("text25-test")};</li>
                <li> {t("text26-test")};</li>
              </StyledList>
            </StyledHalfBorder>
            <StyledHalfBorder>
              <StyledList>
                <li> {t("text27-test")};</li>
                <li> {t("text28-test")};</li>
                <li> {t("text29-test")};</li>
              </StyledList>
            </StyledHalfBorder>
            <StyledHalfWithoutBorder>
              <StyledList>
                <li> {t("text30-test")};</li>
                <li> {t("text31-test")};</li>
                <li> {t("text51-test")};</li>
                <li> {t("text52-test")};</li>
              </StyledList>
            </StyledHalfWithoutBorder>
          </StyledRightBlock>
        </StyledRowContent>
        <StyledRowContent>
          <StyledLeftBlock>
            <StyledTitleContainer>
              <h2>
                {t("text32-test")} <br /> {t("text32-2-test")}
              </h2>
            </StyledTitleContainer>
            <StyledSmallBlock isGreen>
              <StyledFullBorder isGreen className="isFirst">
                <h3> {t("text33-test")}</h3>
                <p>
                  {t("text34-test")}
                </p>
              </StyledFullBorder>
              <StyledFullWithoutBorder>
                <h3> {t("text35-test")}</h3>
                <p>
                  {t("text36-test")}
                </p>
                <ButtomModalMobile>
                  <button className="button-modal-structural" onClick={() => setShow2(true)}>{t("seeBenefits")} {'>'}</button>
                  <StructuralTest title="Teste Estrutural" onClose={() => setShow2(false)} show2={show2}>
                    <StyledHalfBorder isGreen>
                      <p className="modal-structural-title"> {t("benefits")}</p>
                      <p className="modal-structural-subtitle">{t("text33-test")}</p>
                      <StyledList>
                        <li>{t("text8-test")}</li>
                        <li> {t("text37-test")};</li>
                        <li> {t("text38-test")};</li>
                        <li> {t("text39-test")};</li>
                        <li> {t("text40-test")}.</li>
                      </StyledList>
                    </StyledHalfBorder>
                    <StyledList>
                      <p className="modal-structural-subtitle">Teste de Integração</p>
                      <li>{t("text8-test")};</li>
                      <li>{t("text41-test")};</li>
                      <li>{t("text42-test")};</li>
                      <li>{t("text43-test")};</li>
                      <li>{t("text4-test")}.</li>
                    </StyledList>
                  </StructuralTest>
                </ButtomModalMobile>
              </StyledFullWithoutBorder>
            </StyledSmallBlock>
          </StyledLeftBlock>
          <StyledRightBlock isGreen>
            <StyledHalfBorder isGreen>
              <h3>{t("benefits")}</h3>
              <StyledList>
                <li>{t("text8-test")}</li>
                <li> {t("text37-test")};</li>
                <li> {t("text38-test")};</li>
                <li> {t("text39-test")};</li>
                <li> {t("text40-test")}.</li>
              </StyledList>
            </StyledHalfBorder>
            <StyledHalfWithoutBorder>
              <StyledList>
                <li>{t("text8-test")};</li>
                <li>{t("text41-test")};</li>
                <li>{t("text42-test")};</li>
                <li>{t("text43-test")};</li>
                <li>{t("text4-test")}.</li>
              </StyledList>
            </StyledHalfWithoutBorder>
          </StyledRightBlock>
        </StyledRowContent>
        <StyledRowContent>
          <StyledLeftBlock>
            <StyledTitleContainer>
              <h2>
                {t("text46-test")} <br /> {t("text46-2-test")}
              </h2>
            </StyledTitleContainer>
            <StyledSmallBlock>
              <StyledFullWithoutBorder className="isFirst">
                <h3>{t("text47-test")}</h3>
                <p>
                  {t("text48-test")}
                </p>
              </StyledFullWithoutBorder>
            </StyledSmallBlock>
          </StyledLeftBlock>
          <StyledRightBlock>
            <StyledHalfWithoutBorder>
              <h3>{t("text49-test")}</h3>
              <StyledList>
                {t("text50-test")}
              </StyledList>
            </StyledHalfWithoutBorder>
          </StyledRightBlock>
        </StyledRowContent>
      </StyledServiceContent>
      <CallActionContact />
    </>
  );
}

export default QAPage;
