import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledThirdScreen,
  StyledAstronauts,
  StyledMaxWidth,
  StyledAstrContent,
  StyledTextIdeaProcess,
  StyledButton,
  StyledAstronautsImg,
  StyledMoonImg
} from './styles';
import ArrowRight from '../../Assets/arrow-right.svg';
import astronautsImg from "../../Pages/images/fale-conosco.svg";
import MoonImg from '../../Pages/images/process-moon.svg';
import smoke from "../../Pages/images/smoke.svg";
import { useTranslation } from "react-i18next";

function CallActionContact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }
  return (
    <StyledThirdScreen>
      <StyledAstronauts>
        <StyledMaxWidth>
          <StyledAstrContent>
            <h2>
            {t("text1-idea")} <br /> <span>{t("text2-idea")}</span>
            </h2>
            <StyledTextIdeaProcess>{t("text3-idea")}</StyledTextIdeaProcess>
            <StyledButton type="button" onClick={() => redirectTo('/contact')}>
              <p>{t("starProject")}</p>
              <img src={ArrowRight} alt="Seta para direita" />
            </StyledButton>
          </StyledAstrContent>
        </StyledMaxWidth>
        <StyledAstronautsImg>
          <img className="image-atronauts-home" src={astronautsImg} alt="" />
          <img className="smoke2-call" src={smoke} alt="" />
          <img className="smoke1-call" src={smoke} alt="" />
        </StyledAstronautsImg>
        <StyledMoonImg src={MoonImg} alt="Ilustração da lua" />
      </StyledAstronauts>
    </StyledThirdScreen>
  );
}

export default CallActionContact;
