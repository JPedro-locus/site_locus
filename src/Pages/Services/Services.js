import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
  MainServices,
  MainServicesMobile,
  StyledCards,
  StyledBack
}
  from "./styles.js";
import { useParams } from "react-router-dom";
import Card from './Card';
import { Link } from "react-router-dom";
import moonImg from '../images/process-moon.svg';
import satelliteServices from "../images/satelite.svg";
import CallActionContact from "../../Components/CallActionContact";

import imgServices from "../images/conteudocard.svg";
import imgServices1 from "../images/conteudocard-1.svg";
import imgServices2 from "../images/conteudocard-2.svg";
import imgServices3 from "../images/conteudocard-3.svg";
import imgServices4 from "../images/conteudocard-4.svg";
import imgServices5 from "../images/conteudocard-5.svg";
import imgServices6 from "../images/conteudocard-6.svg";
import imgServices7 from "../images/conteudocard-7.svg";

import ShadowServices from "../images/shadow-services.svg";
import ShadowServices1 from "../images/shadow-services1.svg";
import ShadowServices2 from "../images/shadow-services2.svg";
import ShadowServices3 from "../images/shadow-services3.svg";
import ShadowServices4 from "../images/shadow-services4.svg";
import ShadowServices5 from "../images/shadow-services5.svg";
import ShadowServices6 from "../images/shadow-services6.svg";
import ShadowServices7 from "../images/shadow-services7.svg";
import IntroductionServicesMobile from "./IntroductionServicesMobile/index";
import CarouselDesign from "./Carousels/CarouselDesign/CarouselDesign";
import CarouselDev from "./Carousels/CarouselDev/CarouselDev";
import CarouselConsultancy from "./Carousels/CarouselConsultancy/CarouselConsultancy";
import { useWindowSize } from '../../hooks/useResize';

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }

  return (
    <>
      <MainServices>
        <div className="section-services">
          <div className="container-main-services">
            <div className="container-one-services" >
              <div className="texts-container-one-services">
                <div className="service-path">
                  <Link className="link-services" to="/">Home</Link>
                  <p className="separator"><b>/</b></p>
                  <p><b>Services</b></p>
                </div>
                <p className="title-services-one">{t("text1-services")}</p>
<<<<<<< HEAD
                <p className="text-services-one">{t("text2-services")}
                </p>
=======
                <p className="text-services-one">{t("text2-services")}</p>
                <br/>
                <p className="text-services-one-2">{t("text2-services2")}</p>
>>>>>>> main
              </div>
            </div>
            <div className="animation-satellite">
              <img className="img-moon-services" src={moonImg} alt="" />
              <img className="img-satellite-services" src={satelliteServices} alt="" />
            </div>

            <StyledCards>
<<<<<<< HEAD
              <Card icon={imgServices} shadow={ShadowServices} title="DESIGN INCEPTION" text="" handleClick={() => redirectTo('/design/designinception')} />
              <Card icon={imgServices1} shadow={ShadowServices1} title="QA TEST FACTORY" text="" handleClick={() => redirectTo('/consultancy/qa')} />
              <Card icon={imgServices2} shadow={ShadowServices2} title="CLOUD SECURITY" text="" handleClick={() => redirectTo('/consultancy/cloud')} />
              <Card icon={imgServices3} shadow={ShadowServices3} title="SQUAD OUTSOURCE" text="" handleClick={() => redirectTo('/contact')} />
            </StyledCards>
            <StyledCards>
              <Card icon={imgServices4} shadow={ShadowServices4} title="DIGITAL PRODUCT DESIGN" text="" handleClick={() => redirectTo('/contact')} />
              <Card icon={imgServices5} shadow={ShadowServices5} title="CUSTOM SOFTWARE" text="" handleClick={() => redirectTo('/dev/customSoftware')} />
              <Card icon={imgServices6} shadow={ShadowServices6} title="STAFF AUGMENTATION" text="" handleClick={() => redirectTo('/contact')} />
              <Card icon={imgServices7} shadow={ShadowServices7} title="CTO AS A SERVICE" text="" handleClick={() => redirectTo('/consultancy/CTO')} />
=======
              <Card icon={imgServices} shadow={ShadowServices} title="DESIGN INCEPTION" text={t("text_desing_inception")} handleClick={() => redirectTo('/design/designinception')} />
              <Card icon={imgServices1} shadow={ShadowServices1} title="QA TEST FACTORY" text={t("text_QA_test_factory")} handleClick={() => redirectTo('/consultancy/qa')} />
              <Card icon={imgServices2} shadow={ShadowServices2} title="CLOUD SECURITY" text={t("text_cloud_security")} handleClick={() => redirectTo('/consultancy/cloud')} />
              <Card icon={imgServices3} shadow={ShadowServices3} title="SQUAD OUTSOURCE" text={t("text_squad_outsource")} handleClick={() => redirectTo('/contact')} />
            </StyledCards>
            <StyledCards>
              <Card icon={imgServices4} shadow={ShadowServices4} title="DIGITAL PRODUCT DESIGN" text={t("text_digital_product_design")} handleClick={() => redirectTo('/contact')} />
              <Card icon={imgServices5} shadow={ShadowServices5} title="CUSTOM SOFTWARE" text={t("text_custom_software")} handleClick={() => redirectTo('/dev/customSoftware')} />
              <Card icon={imgServices6} shadow={ShadowServices6} title="STAFF AUGMENTATION" text={t("text_staff_argumetation")} handleClick={() => redirectTo('/contact')} />
              <Card icon={imgServices7} shadow={ShadowServices7} title="CTO AS A SERVICE" text={t("text_CTO")} handleClick={() => redirectTo('/consultancy/CTO')} />
>>>>>>> main
            </StyledCards>
          </div>
        </div>
        <CallActionContact />
      </MainServices>
      <MainServicesMobile>
        <IntroductionServicesMobile />
        <div className="container-services-mobile">
          <div className="carousel-services-mobile">
            <p className="text-carousel-services">DESIGN</p>
            <CarouselDesign />
          </div>
          <div className="carousel-services-mobile">
            <p className="text-carousel-services">DEVELOPMENT</p>
            <CarouselDev />
          </div>
          <div className="carousel-services-mobile">
            <p className="text-carousel-services">CONSULTANCY</p>
            <CarouselConsultancy />
          </div>
        </div>
        <CallActionContact />
      </MainServicesMobile>
    </>

  );
}

export default Services;