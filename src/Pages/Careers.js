import "../Styles/Carrers.css";
import imageCareers from "./images/imageCareers.svg";
import imageCareersMobile from "./images/imagem-colagem-carreiras-mobile.svg";
import arrow from "./images/arrowimg.svg";
import heart from "./images/heart.svg";
import arrowBlack from "./images/arrowBlack.svg";
import CarouselOne from "../Components/Carousels/CarouselOne/CarouselOne.jsx";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
//imagens benefícios
import imgPlan from "./images/plano-saude.svg";
import time from "./images/tempo.svg";
import benefits from "./images/beneficios.svg";
import course from "./images/cursos.svg";


import borderLeft from "./images/border2.png";
import borderRight from "./images/border1.svg";

import { FaArrowRight } from 'react-icons/fa';

const Carrers = () => {
  const { t } = useTranslation();


  return (
    <section>
      <div className="main-careers">
        <div className="container-careers">
          <div className="containerOne-careers">
            <div className="texts-careers">
              <div className="rail-careers">
                <Link className="link-careers" to="/">Home</Link>
                <p className="separator"><b>/</b></p>
                <p><b>Careers</b></p>
              </div>
              <p className="text1-careers">{t("text1-careers")}</p>
              <h2 className="text2-careers">{t("text2-careers")}</h2>
              <p className="text3-careers">{t("text3-careers")}</p>
              <a target="_blank" href="https://locussoftware.gupy.io./">
                <div className="div-button-careers1">
                  <button className="button-careers1">{t("button-careers")}</button>
                  <img className="img-button-careers" src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="image-careers-div">
              <img className="border-left" src={borderLeft} alt="" />
              <img className="border-right" src={borderRight} alt="" />
              <img className="image-careers" src={imageCareers} alt="" />
            </div>
          </div>
        </div>
        <div className="benefits-green-container">
          <div className="border-left-green"></div>
          <div className="content-benefits">
            <div className="container-benefits">
              <div className="benefits-introduction">
                <p className="text1-benefits">{t("text4-careers")}</p>
                <p className="text2-benefits">{t("text5-careers")}</p>
                <p className="text3-benefits">{t("text6-careers")}</p>
                <img src={heart} alt="" />
              </div>
              <div className="benefits-list">
                <div className="benefits-title-subtitle">
                  <p className="title-benefits-list">{t("text7-careers")}</p>
                  <p className="subtitle-benefits-list">{t("text8-careers")} <b><u>{t("text7-careers")}</u></b> {t("text8-1-careers")}</p>
                </div>
                <div className="benefits-images">
                  <div className="benefit">
                    <img className="img-benefit-one" src={imgPlan} alt="" />
                    <p className="text-benefits">{t("text9-careers")}</p>
                  </div>
                  <div className="benefit">
                    <img className="img-benefit-two" src={course} alt="" />
                    <p className="text-benefits">{t("text10-careers")}</p>
                  </div>
                  <div className="benefit">
                    <img src={benefits} alt="" />
                    <p className="text-benefits">{t("text11-careers")}</p>
                  </div>
                  <div className="benefit">
                    <img src={time} alt="" />
                    <p className="text-benefits">{t("text12-careers")}</p>
                  </div>
                </div>
                <a target="_blank" href="https://locussoftware.gupy.io./">
                  <div className="div-button-careers2">
                    <button className="button-careers2"> {t("button-careers")} </button>
                    <img className="img-button-careers" src={arrow} alt="" />
                  </div>
                </a>
                <div className="culture-container">
                  <p className="title-culture">{t("text13-careers")}</p>
                  <p className="subtitle-culture">{t("text14-careers")} </p>
                </div>

                <div className="carousel-container">
                  <CarouselOne />
                </div>
              </div>
            </div>
          </div>
          <div className="border-right-green"></div>

        </div>
        <a target="_blank" href="https://locussoftware.gupy.io./">
          <div className="div-button-careers3" >
            <div className="div-icon-text-careers3">
              <p className="text-button-careers3">{t("button-careers")}</p>
            </div>
            <div><FaArrowRight /></div>
          </div>
        </a>
      </div>
      <div className="mobile-careers">
        <div className="introduction-mobile-careers">
        <div className="rail-careers">
                <Link className="link-careers" to="/">Home</Link>
                <p className="separator"><b>/</b></p>
                <p><b>Careers</b></p>
              </div>
          <p>{t("text1-careers")}</p>
          <p className="text2-careers-mobile">{t("text2-careers")}</p>
          <img src={imageCareersMobile} alt="" />
          <p className="text3-careers-mobile">{t("text3-careers")}</p>
        </div>
        <a target="_blank" href="https://locussoftware.gupy.io./">
          <div className="buttonCareersMobile">
            <button className="button-careers-mobile"> {t("button-careers")} </button>
            <img className="img-button-careers-mobile" src={arrow} alt="" />
          </div>
        </a>
        <div className="div-green-mobile">
          <div className="benefits-introduction-mobile">
            <p className="text1-benefits-mobile">{t("text4-careers")} </p>
            <p className="text2-benefits-mobile">{t("text5-careers")}</p>
            <p className="text3-benefits-mobile">{t("text6-careers")}</p>
            <img src={heart} alt="" />
          </div>
          <div className="benefits-images-mobile">
            <p className="title-benefits-list-mobile">{t("text7-careers")}</p>
            <p className="subtitle-benefits-list-mobile">{t("text8-careers")} <b><u>{t("text7-careers")}</u></b> {t("text8-1-careers")}</p>
            <div className="benefitsOneMobile">
              <img className="img-benefitsOneMobile" src={imgPlan} alt="" />
              <p>{t("text9-careers")}</p>
            </div>
            <div className="benefitsOneMobile">
              <img className="img-benefitsOneMobile" src={course} alt="" />
              <p>{t("text10-careers")}</p>
            </div>
            <div className="benefitsOneMobile">
              <img className="img-benefitsOneMobile" src={benefits} alt="" />
              <p>{t("text11-careers")}</p>
            </div>
            <div className="benefitsFourMobile">
              <img className="img-benefitsOneMobile" src={time} alt="" />
              <p>{t("text12-careers")}</p>
            </div>
            <a target="_blank" href="https://locussoftware.gupy.io./">
              <div className="buttonCareersMobile">
                <button className="button-careers-mobile"> {t("button-careers")}</button>
                <img className="img-button-careers-mobile" src={arrow} alt="" />
              </div>
            </a>
          </div>
          <p className="title-culture-mobile">{t("text13-careers")}</p>
          <p className="subtitle-culture-mobile">{t("text14-careers")}</p>
          <div className="carousel-container-mobile">
            <CarouselOne />
          </div>
        </div>
        <a className="container-button3-careers-mobile" target="_blank" href="https://locussoftware.gupy.io./">
          <div className="div-button-careers3-mobile">
            <div className="div-text-button-careers3-mobile">
              <p className="text-button-careers3-mobile">{t("button-careers")}</p>
              <FaArrowRight />
            </div>
          </div>
        </a>
      </div>
    </section >

  );
}
export default Carrers;