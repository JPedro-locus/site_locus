import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../Components/LanguageSwitcher";
import { Link } from "react-router-dom";
import Mouse from '../../Components/Mouse';

import vision from "../images/visao.svg";
import mission from "../images/missao.svg";

import CarouselTwo from "../../Components/Carousels/CarouselTwo/CarouselTwo.jsx";
import dialogue from "../images/dialogo.svg";
import dialogueMobile from '../images/astronauts-mobile.svg';
import backgroundAbout from '../images/background-about.svg';
import borderAbout from '../images/border-about.svg';
import imgSquad from '../images/image-squad.webp';

import torre from "../images/Torre.svg";
import torreAbout from "../images/torre-about.svg";
import { FaArrowRight } from 'react-icons/fa';

import LineCulture from '../images/line-culture.svg';


import {
  MainAbout
}
  from "./style";

const About = () => {
  const { t } = useTranslation();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  return (
    <MainAbout>
      <div className="main-about">
        <div className="div-green"></div>
        <div className="div-about-one">
          <img className="img-background" src={backgroundAbout} />
          <div className="img-about-one">
            <img className="tower-about" src={torre} alt="" />
            <img className="tower-about-mobile" src={torreAbout} alt="" />
          </div>
          <div className="container-about-one">
            <div className="text-container-about-one">
              <div className="container-link">
                <Link className="link-about" to="/">Home</Link>
                <p className="separator"><b>/</b></p>
                <p><b>About Us</b></p>
              </div>
              <h1 className="text1-about">{t("text1-about")}</h1>
              <div className="div-text2-about">
                <p className="text2-about">{t("text2-about")}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-about-two">
        <div className="text-container-about-two">
          <h1 className="title-container-about-two">{t("text3-about")}</h1>
          <p className="text3-about">{t("text4-about")}</p>
          <p className="text13-about">{t("text13-about")}</p>
        </div>
        <div className="image-squad">
          <div className="pic-border"><img src={borderAbout} alt="Colagem da equipe locus" /></div>
          <div className="pic-squad"><img src={imgSquad} alt="Colagem da equipe locus" /></div>
        </div>
      </div>
      <div className="container-about-three">
        <h1 className="text4-about">{t("text5-about")}</h1>
        <div className="cards-about">
          <div className="card1-about">
            <div>
              <h2 className="title-card">{t("text6-about")}</h2>
              <p className="text-card">{t("text7-about")}</p>
            </div>
            <div>
              <img className="pic-card1" src={mission} alt="" />
            </div>
          </div>
          <div className="culture-card">
            <p className="title-card">{t("text12-about")}</p>
            <img src={LineCulture} alt="" />
          </div>
          <div className="card2-about">
            <div>
              <h2 className="title-card">{t("text8-about")}</h2>
              <p className="text-card">{t("text9-about")}.</p>
            </div>
            <div>
              <img className="pic-card2" src={vision} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-about-four">
        <div className="carousel-about">
          <CarouselTwo />
        </div>
        <div className="squad-about">
          <div className="text-squad-about">
            <p className="title-squad-about">{t("text10-about")}</p>
            <p className="text-squad-about">{t("text11-about")}</p>
            <a target="_blank" href="https://locussoftware.gupy.io./">
              <div className="button-about-squad">
                <p className="text-about-squad-button">{t("joinUs")}</p>
                <div className="arrow"><FaArrowRight /></div> 
              </div>
            </a>
          </div>
          <div className="dialogue">
            <img src={dialogue} alt="" />
          </div>
          <div className="dialogue-mobile">
            <img src={dialogueMobile} alt="" />
          </div>
        </div>
      </div>
      <div id="mouse-about">
        <Mouse />
      </div>

    </MainAbout>

  );
}

export default About;