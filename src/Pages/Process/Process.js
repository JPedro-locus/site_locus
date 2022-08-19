import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import ProcessAnimation from '../images/flow-circle.svg';
import ReleaseIcon1 from '../images/lancamento.svg';
import GreenArrow from '../../Assets/green-arrow.svg';
import ArrowFlow from '../images/fluxo.svg';
import Card from './Card';
import astronautsImg from "../../Pages/images/astronauts-bubble.svg";
import Mouse from '../../Components/Mouse';
import DiscoveryIcon from '../../Assets/discovery.svg';
import DesignIcon from '../../Assets/design.svg';
import DevIcon from '../../Assets/dev.svg';
import ValidationIcon from '../../Assets/validation.svg';
import ProcessLine from '../../Assets/process-line.svg';
import ReleaseIcon from '../../Assets/release.svg';
import ArrowRight from '../../Assets/arrow-right.svg';
import MoonImg from "../images/process-moon.svg";
import ProcessImgMobile from "../images/Processos.svg";
import LineOne from "../images/line-mobile-one.svg";
import LineTwo from "../images/line-mobile-two.svg";
import CallActionContact from "../../Components/CallActionContact";

import {
  MainProcess,
  StyledFirstScreen,
  StyledLeftContent,
  StyledTextContainer,
  StyledSubtitle,
  StyledImageContainer,
  StyledImgFlow,
  StyledPath,
  StyledSecondScreen,
  StyledColumn,
  StyledColumn2,
  StyledDividerProcess,
  StyledMoonImg,
  StyledTextIdeaProcess,
  StyledArrowFlow,
  StyledFlowContainer,
  StyledRelease,
  StyledGreenArrow,
  MainProcessMobile,
  StyledTextContainerMobile,
  StyledProcessImg,
  ContainerTwoMobile,
  ContainerThreeMobile,
  ContainerFourMobile,
  CardLeftMobile,
  CardRightMobile,
  StyledDescription
} from './styles';
import { Link } from 'react-router-dom';

function Process() {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <MainProcess>
        <StyledFirstScreen>
          <StyledLeftContent>
            <StyledTextContainer>
<<<<<<< HEAD
              <StyledPath>Home <span>/ {t("text1-process")}</span></StyledPath>
=======
              <StyledPath> <Link className="link-event-specific" to="/"> Home </Link> / {t("text1-process")}</StyledPath>
>>>>>>> main
              <StyledSubtitle>{t("text2-process")}</StyledSubtitle>
              <StyledDescription>{t("text3-process")}</StyledDescription>
            </StyledTextContainer>
          </StyledLeftContent>
          <StyledImageContainer>
            <StyledFlowContainer>
              <StyledRelease src={ReleaseIcon1} alt="Icone de lançamento" />
              <StyledGreenArrow src={GreenArrow} alt="Icone de seta" />
              <StyledImgFlow src={ProcessAnimation} alt="Fluxo lean inception" />
              <StyledArrowFlow src={ArrowFlow} alt="Linhas do fluxo" />
            </StyledFlowContainer>
          </StyledImageContainer>
        </StyledFirstScreen>
        <StyledSecondScreen>
          <StyledColumn>
            <Card scrollPosition={scrollPosition} className="left" icon={DiscoveryIcon} side="left" label={t("text4-process")} description={t("text5-process")}/>
            <Card scrollPosition={scrollPosition} className="left" icon={DevIcon} side="left" label={t("text6-process")} description={t("text7-process")} />
            <Card scrollPosition={scrollPosition} className="left" icon={ReleaseIcon} side="left" label={t("text8-process")} description={t("text9-process")} />
          </StyledColumn>
          <StyledDividerProcess>
<<<<<<< HEAD
            <p>PROCESS</p>
=======
            <p>{t("header-process")}</p>
>>>>>>> main
            <img src={ProcessLine} alt="" />
            <img src={ProcessLine} alt="" />
            <img src={ProcessLine} alt="" />
            <img src={ProcessLine} alt="" />
            <img src={ProcessLine} alt="" />
            <img src={ProcessLine} alt="" />
          </StyledDividerProcess>
          <StyledColumn2>
            <Card scrollPosition={scrollPosition} icon={DesignIcon} className="right" side="right" label={t("text10-process")} description={t("text11-process")} />
            <Card scrollPosition={scrollPosition} icon={ValidationIcon} className="right" side="right" label={t("text12-process")} description={t("text13-process")} />
          </StyledColumn2>
        </StyledSecondScreen>
        <CallActionContact />
        <Mouse />
      </MainProcess>
      <MainProcessMobile>
        <div className="container-one-mobile">
          <StyledTextContainerMobile>
            <StyledPath>Home <span>/ {t("text1-process")}</span></StyledPath>
            <StyledSubtitle>{t("text2-process")}</StyledSubtitle>
            <p>{t("text3-process")}</p>
          </StyledTextContainerMobile>
        </div>
        <ContainerTwoMobile>
          <StyledProcessImg src={ProcessImgMobile} alt="imagem processo" />
          <p className="text1">DISCOVERY</p>
          <p className="text2">DESIGN</p>
          <p className="text3">VALIDATION</p>
          <p className="text4">DEV</p>
          <p className="text5">RELEASE</p>
        </ContainerTwoMobile>
        <ContainerThreeMobile>
          <h2>Process</h2>
          <img src={LineOne} />
        </ContainerThreeMobile>
        <ContainerFourMobile>
          <CardLeftMobile>
            <div className="icon-mobile"><img src={DiscoveryIcon} /></div>
            <h2>{t("text4-process")}</h2>
            <p>{t("text5-process")}</p>
          </CardLeftMobile>
          <CardRightMobile>
            <div className="icon-mobile"><img src={DesignIcon} /></div>
            <h2>{t("text6-process")}</h2>
            <p>{t("text7-process")}</p>
            <img className="line" src={LineTwo} />
          </CardRightMobile>
          <CardLeftMobile>
            <div className="icon-mobile"><img src={DevIcon} /></div>
            <h2>{t("text8-process")}</h2>
            <p>{t("text9-process")}</p>
            <img className="line" src={LineTwo} />
          </CardLeftMobile>
          <CardRightMobile>
            <div className="icon-mobile"><img src={ValidationIcon} /></div>
            <h2>{t("text10-process")}</h2>
            <p>{t("text11-process")}</p>
            <img className="line" src={LineTwo} />
          </CardRightMobile>
          <CardLeftMobile>
            <div className="icon-mobile"><img src={ReleaseIcon} /></div>
            <h2>{t("text12-process")}</h2>
            <p>{t("text13-process")}</p>
            <img className="line" src={LineTwo} />
          </CardLeftMobile>
          <CallActionContact />
        </ContainerFourMobile>
      </MainProcessMobile>
    </section >

  );
}

export default Process;
